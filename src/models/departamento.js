'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    codigo: {
        type: Number,
        required: [true, "Código do departamento é obrigatório"]
    },
    
    nome: {
        type: String,
        required: [true, "Nome do departamento é obrigatório"]

    },
    
    setor: {
        type: String,
        required: [true, "Setor é obrigatório"]
    },

    active: {
        type: Boolean,
        required: true,
        default: true
        }
        

});


module.exports = mongoose.model('Departamento', schema);