 
import webpack from 'webpack'
import { resolve } from 'path'
 export default {
 
  ssr: false,
  target: "static",
  server: { port: 8030,},
  head: {
    title: "KBTG INSPIRE",
    htmlAttrs: { lang: "en", },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "" },
      { ["http-equiv"]: "X-UA-Compatible", content: "IE-edge" },
      { hid: "description", name: "description", content: "" },
      {name:"facebook-domain-verification" ,content:"854k12xqe83ikkh3n6kxdwmhcifa9a"},
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.svg",
      },
    ],
    
  },
  css: [ { src: "~/assets/css/main.css" },],

  components: true,
  babel: { compact: true },
  buildModules: [],
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery:'jquery',
        // datepicker:'jquery'
      })
   ],
  },
  alias: {
      WOWJS: resolve(__dirname, './static/js/wow.js'),
      JQ: resolve(__dirname, './static/js/jquery-3.6.0.js'),
  },
  bootstrapVue: {
    icons: true,
  },
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/proxy",
    "nuxt-i18n",
  ],
  axios: {
    proxy: true,
  },
  // proxy: {
  //   "/api/": {
  //     target: process.env.AXIOS_SERVER,
  //     pathRewrite: { "^/api/": "" },
  //   },
  // },
  // i18n: {
  //    locales: [
  //     { code: "en", iso: "en-US", file: "./static/lang/en.json" },
  //     { code: "th", iso: "th-TH", file: "./static/lang/en.json" },
  //   ],
  //   noPrefixDefaultLocale: true,
  //   defaultLocale: "en",
  //   vueI18n: {
  //     fallbackLocale: "",
  //     messages: {
  //       en: require("./static/lang/en.json"),
  //       th: require("./static/lang/th.json"),
  //     },
  //   },
  // },
  };
