const webpack = require('webpack')

export default {
    target: 'static', // default is 'server'
    env: {
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Hello Nuxt.js',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/dotenv'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            vue: {
                transformAssetUrls: {
                    audio: 'src'
                }
            }
        },
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            })
        },
        // plugins: [
        //     new webpack.ProvidePlugin({
        //         '_': 'lodash'
        //     })
        // ]
    }
}
