/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias:{
    "components":"./src/Components"
  },
  mount: {
    public: '/',
    src:'/dist',
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-react-refresh',
    "@snowpack/plugin-postcss",
    // '@snowpack/plugin-webpack',

  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
    bundle: true,
    manifest:true,
    minify:true,
    sourcemap:true,
    target:'es2020',
    treeshake:true,

  },
  packageOptions: {
    /* ... */
    // source:'remote'
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    clean:true
  },
};
