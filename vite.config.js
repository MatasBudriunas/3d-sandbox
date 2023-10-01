export default {
    root: 'src',
    build: {
        outDir: '../public/build',
        rollupOptions: {
            input: './src/main.js'
        }
    },
    server: {
        port: 3000
    }
}
