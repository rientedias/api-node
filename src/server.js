/*
 * IMPORTS
 *Express
 *Mongoose
 *Routes
 *app
 *Utilizando o formato Json
 *Utilizando routes
 */

const express =   require('express');
const mongoose =   require('mongoose');
const routes  =   require('./routes');
const app = express();
/**
 * CONECXÃO
 * Banco de dados MongoDb.
 */
mongoose.connect('mongodb+srv://ederriente:eder@cluster0-hzrl9.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); 
app.use(routes);

/*
 * PORTA
 * Configuração de Porta. 
 */

app.listen(3333);