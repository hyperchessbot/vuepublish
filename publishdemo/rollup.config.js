import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import css from 'rollup-plugin-css-only'

export default {
    input: './index.js', // Path relative to package.json
    output: {
        file: 'publishdemo.js',
        exports: 'named',
    },
    plugins: [        
        css(),
        vue({
            css: true,
            compileTemplate: true, // Explicitly convert template to render function
        }),        
        commonjs(),
        buble(), // Transpile to ES5        
    ],
};