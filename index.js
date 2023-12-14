// 1. IMPORTACIÓN DE DEPENDENCIAS -> CONFIGURAR A EXPRESS COMO SERVIDOR
// Importamos express según sistema de módulos ES6
import express from 'express';
// Importar path nos va a permitir acceder a funcionalidades de las rutas
import path from 'path';

// configuramos express como servidor
const app = express();

// 2. RUTAS PARA LAS PETICIONES QUE RECIBE EL SERVIDOR
// process.cwd() -> identifica mi ruta raíz (http://localhost:3000/)
// 'public'-> archivos estáticos -front
const rutaPublica = path.join(process.cwd(), 'public');

// configuramos middleware -> puentes de conexión entre los información de mi app y el servidor
app.use(express.static(rutaPublica));


app.get('/', (req,res)=> {
    // req -> request - solicitud del cliente
    // res -> res - respuesta por parte del servidor (res.sendFile)
    // sendFile -> enviamos una archivo como respuesta (está en la rutaPublica, index.html)
    res.sendFile(path.join(rutaPublica, 'index.html'))
})


// INICIALIZAR EL SERVIDOR
app.listen(3000, ()=>{
    console.log('estoy en el puerto http://localhost:3000')
});

// const server = app.listen(0, () => {
    // Imprimir el puerto en el que está corriendo el servidor
//     console.log('Servidor corriendo en el puerto: ', server.address().port);
// });