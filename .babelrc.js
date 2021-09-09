// In .babelrc.js
module.exports = {
    presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
    plugins: ['superjson-next', 'babel-plugin-macros', ['styled-components', { ssr: true }]],
}