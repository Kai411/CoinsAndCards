export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/styles/global.css"],
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "shadcn-nuxt", "@pinia/nuxt"],
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"],
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  runtimeConfig: {
    public: {
      fbApiKey: "",
      fbAuthDomain: "",
      fbProjectId: "",
      fbStorageBucket: "",
      fbMessagingSenderId: "",
      fbAppId: "",
      fbMeasurementId: "",
    },
  },
});
