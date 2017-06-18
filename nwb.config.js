module.exports = {
    type: 'react-component',
    babel: {
        plugins: ['react-html-attrs']
    },
    npm: {
        esModules: true,
        umd: {
            global: 'EnerfundFilter',
            externals: {
                react: 'React'
            }
        }
    }
}
