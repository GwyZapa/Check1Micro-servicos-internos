'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: [true, "Nome é obrigatório"]
    },
    
    documento: {
        type: String,
        required: [true, "Documento é obrigatório"]

    },
    
    endereco: {
        type: String,
        required: [true, "Endereço é obrigatório"]
    },

    telefone:{
        type: Number,
        required: [true, "Número de telefone é obrigatório"]
    },

    active: {
        type: Boolean,
        required: true,
        default: true
        }
        

});


module.exports = mongoose.model('Pessoas', schema);