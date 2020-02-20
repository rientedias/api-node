const mongoose = require('mongoose');

/**
 * SCHEMA
 * Criando Schema de Booking.
 */

const BookingSchema = new mongoose.Schema({

    date: String, //data do pedido
    approved: Boolean, //aprovação
    user: { //Referenciando usuario que esta pedindo .
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: { //Referenciando usuario o Spot.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    },

});

//Exportando Schema.
module.exports = mongoose.model('Booking', BookingSchema);