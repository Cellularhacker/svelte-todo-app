module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-optimize",
    "@snowpack/plugin-babel",
    "@snowpack/plugin-sass",
  ],
  alias: {
    "~": "./src",
  },
  devOptions: {
    // port: 8080 // Default: 8080
    open: "none", // Don't open a new browser when launch dev mode.
  },
};
