const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productosSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'Nombre es obligatorio']
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: [true, 'Categoria es obligatoria']

    },
    precio: {
        type: String,
        required: [true, 'Precio es obligatorio']
    },
    disponibilidad: {
        type: Boolean,
        default: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Usuario es obligatorio']

    }
});

module.exports = mongoose.model('Productos', productosSchema);