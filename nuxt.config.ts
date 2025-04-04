// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["bootstrap/dist/css/bootstrap.min.css"],
  build: {
    transpile: ['gsap'],
  },
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" },
    "~/plugins/font-awesome.js",
    { src: "~/plugins/jquery", mode: "client" },
    "~/plugins/toast.js",
  ],
  modules: ["@pinia/nuxt"],
});
