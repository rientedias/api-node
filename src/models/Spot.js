const mongoose = require('mongoose');

/**
 * SCHEMA
 * Criando Schema de Spots.
 */

const SpotSchema = new mongoose.Schema({

  thumbnail: String, //imagens
  company: String, //empresa
  price: String, //preço
  techs: [ String ], //Array de tecnologias. 
  user: { //Referenciando usuario criador do Spot.
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }

});

//Exportando Schema.
module.exports = mongoose.model('Spot', SpotSchema);