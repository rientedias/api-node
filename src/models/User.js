const mongoose = require('mongoose');

/**
 * SCHEMA
 * Criando Schema de Usuario.
 */

const UserSchema = new mongoose.Schema({

    email: String,

});

//Exportando Schema.
module.exports = mongoose.model('User', UserSchema);