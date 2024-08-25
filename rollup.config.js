import { rollup } from "rollup";

// rollup.config.mjs
export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs'
	}
};