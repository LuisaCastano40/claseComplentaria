// 1. IMPORTACIÓN DE DEPENDENCIAS -> CONFIGURAR A EXPRESS COMO SERVIDOR

// Importamos express según sistema de módulos ES6
import express from 'express';
// Importar path nos va a permitir acceder a funcionalidades de las rutas
import path from 'path';
// Importamos dotenv para usar variables de entorno
import dotenv from 'dotenv';
// Importar nuestra función de conexion a la base de datos
import conexionMongo from './config/db.js';

// configuramos express como servidor
const app = express();
// configurar el uso de las variables de entorno
dotenv.config();


// ------------------------------------------------------------
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



// ----------------------------------------------------------------
// 3. INICIALIZAR EL SERVIDOR

// llamar la función de conexión
conexionMongo();

app.listen(9000, ()=>{
    console.log('estoy en el puerto http://localhost:9000');
});

// Al seleccionar poner 0 en el puerto, se escucha el servidor en el primer puerto disponible
// const server = app.listen(0, () => {
//     console.log('Servidor corriendo en el puerto: ', server.address().port);
// });