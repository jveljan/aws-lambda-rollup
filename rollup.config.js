import rollupConfigBuilder from './index.js'
// pack with ourself, good testing :)
export default rollupConfigBuilder({
  external: [
    'rollup-plugin-node-resolve',
    'builtin-modules',
    'rollup-plugin-commonjs',
    'rollup-plugin-json']
})