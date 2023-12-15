// Crear la función que nos va a permitir conectar nuestra base de datos

// 1. Imporrtar mongoose bajo el modelo ES6
import mongoose from "mongoose";

// 2. creamos nuestra función de conexión 
const conexionMongo = async () =>{
    await mongoose.connect(process.env.DABASE_URI, {});
    // manejo de errores
    try{
        // la respuesta positiva, todo ok
        console.log('conexión a base de datos exitosa');
    } catch{
        // atrapamos los errores y decimos qué debe hacer con ellos
        console.error('Error de conexión:', error.message);
        // message -> atributo del objeto de js error -> nos va a identificar qué es lo que causa el error y nos va a mostrar un mensajito sobre eso
    }
}

// -> .then (respuesta positiva) y el .catch (atrapa errores)
// -> funciones asíncronas -> async await


export default conexionMongo;