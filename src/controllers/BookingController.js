/**
 * BOOKING CONTROLLER
 * Metodos usado no Controller ( index, show, store, update, destroy ).
 */
const Booking = require('../models/Booking');

module.exports = {

    async store(req, res) {

        //Id dom usuario. 
        const { user_id } = req.headers;

        //Id do spots
        const { spot_id } = req.params;

        //data da reserva do spot.
        const { date } = req.body;
        
        //Alimentando o banco de dados.
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);

    }
}