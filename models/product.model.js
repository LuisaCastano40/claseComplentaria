// Importar mongoose para poder usar Schema  ES6
import mongoose from "mongoose";

// accediendo al atributo schema de mongoose -> lo necesitamos para crear nuestro modelo
const schema = mongoose.Schema;

// Estructuramos cómo va a ser los datos a guardar en nuestra db
const productSchema = new schema({
    name: {
        type: String,
        required: true
    },

    imagen: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    }


});


// Exportamos el modelo
// mongoose.model():se utiliza para definir o recuperar un modelo de datos en Mongoose. 
// primer argumento -> nombre del modelo (colección de la db) 
// segundo argumento -> es el esquema del modelo.
const productModel = mongoose.model('product', productSchema);

export default productModel;


