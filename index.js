import nodeResolve from 'rollup-plugin-node-resolve'
import builtins from 'builtin-modules'
import commonJS from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default ({
	input = 'index.js',
	plugins = [],
	external = [],
	output = {
		dir: 'dist',
		format: 'cjs'
	}
}) => ({
	input,
	manualChunks(id) {
		if (id.includes('node_modules')) {
			return 'vendor'
		}
	},
	output,
	plugins: [
		nodeResolve({ preferBuiltins: true }),
		commonJS({ include: 'node_modules/**' }),
		json(),
		...plugins
	],
	external: ['aws-sdk', ...builtins, ...external]
})