const mongoose = require('mongoose')
const { stringify } = require('uuid')

const MulherSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true,
    },
    citacao: {
        type: String,
        required: true,
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', MulherSchema) //diva é a lista criada para armazenar as informações da mulheres com as definições do mulher schema 