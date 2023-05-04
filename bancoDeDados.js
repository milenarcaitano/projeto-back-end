const { config } = require('dotenv')
const mongoose = require('mongoose')
require('dotenv').config(MONGO_URL)

async function conectaBancoDeDados () {
    try{
        console.log('conecxão com o banco de dados iniciou')

    await mongoose.connect(process.env.MONGO_URL)

    console.log('conecxão com banco de dados realizada com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados