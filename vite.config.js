/** @type {import('vite').UserConfig} */ 

import {defineConfig} from 'vite'
import { resolve } from 'path'
import nunjucks from 'vite-plugin-nunjucks'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    root: resolve(__dirname, './src'),   
    build: {
        rollupOptions: {
             /*
                Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
                interna de Rollup de Vite.
            */
            input: {
                // app: resolve(__dirname, './src/main.js'),
                main: resolve(__dirname, './src/index.html'),
                contact: resolve(__dirname, './src/contact.html')
            },
            output: {
                dir: resolve(__dirname, 'build'),
                format: 'es'
            }
        },
        outDir: resolve(__dirname, 'build')
    },
    plugins: [
        // {
        //     autoprefixer: true
        // }
        nunjucks({ variables: { 
            // '../src/index.html': { username: 'John' } 
            'index.html': { username: 'Ronald' },
            'contact.html': { username: 'Ronald'}, 
            'galeria.html': { username: 'Ronald'} 
        } }),
    ]    
})

// vite.config.js
// export default defineConfig({
//     plugins: [
//         laravel([
//             'resources/js/app.js',
//             'resources/css/app.css',
//         ]),
//     ],
// });


// const { resolve } = require('path')
// module.exports = {
//     root: resolve(__dirname, './src'),
//     build: {
//         rollupOptions: {
//             /*
//                 Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
//                 interna de Rollup de Vite.
//             */
//             input: {
//                 main: resolve(__dirname, 'src/index.html'),
//                 about: resolve(__dirname, 'src/about/index.html'),
//             },
//             output: {
//                 dir: resolve(__dirname, 'build'), //Donde se va a crear el build de nuestra aplicacion
//                 format: 'es', //Formato de ES modules
//             },
//         },
//         outDir: resolve(__dirname, 'build'),
//         //minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
//     },
// }