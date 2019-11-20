'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var nodeResolve = _interopDefault(require('rollup-plugin-node-resolve'));
var builtins = _interopDefault(require('builtin-modules'));
var commonJS = _interopDefault(require('rollup-plugin-commonjs'));
var json = _interopDefault(require('rollup-plugin-json'));

var index = ({
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
});

module.exports = index;
