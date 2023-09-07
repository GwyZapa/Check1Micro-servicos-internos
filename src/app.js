const express = require('express') //import do express
const app = express() //criar instancia do express
app.use(express.json()) 
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://usuarioServicosInternos:cXVHl7gCPRfKLQU0@clusterfolhasal.dmmsi7c.mongodb.net/ServicosInternosDB?retryWrites=true&w=majority')

app.use(express.urlencoded({
    extended: true
})) 

//registro da model
require('./models/departamento')
require('./models/pessoas')

//Rotas mapeadas
const departamentoRouter = require('./routers/departamento-route')
const pessoasRouter = require('./routers/pessoas-route')
//colocar a rota do index dentro do app
const index = require('./routers/index')

app.use('/', index) //exponha a rota inicial
app.use('/departamento', departamentoRouter) //cria a rota produto, e adiciona o resto das rotas mapeadas a url
app.use('/pessoas', pessoasRouter) 

module.exports = app; //exportando o app