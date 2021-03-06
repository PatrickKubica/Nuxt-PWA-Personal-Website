const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'de',
    },
    title: 'Patrick Kubica',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Patrick Kubica, Senior Web Developer, Softwareentwickler PHP, Javascript, Laravel, Symfony, Vue.js, Flutter, Frankfurt' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['@nuxtjs/sitemap', {
      generate: true,
      hostname: 'https://www.patrickkubica.de/',
    }],
    ['nuxt-fontawesome', {
        imports: [
          {
            set:'@fortawesome/free-solid-svg-icons',
            icons: ['faEnvelope', 'faFileAlt']
          },
          {
            set:'@fortawesome/free-brands-svg-icons',
            icons: ['faLinkedin', 'faXing', 'faGithub']
          }
       ]
      }
    ]
  ],

  styleResources: {
    scss: [
      './assets/vars/*.scss'
      ]
  },
  
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  manifest: {
    name: 'Patrick Kubica',
    short_name: 'Patrick Kubica',
    lang: 'de'
  }
}
