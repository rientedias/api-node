/*
 * IMPORTS
 * express
 * multer
 * uploadConfig.
 * SessionController.
 * SpotController.
 * DashboardController.
 * BookingController.
 */
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);//Passando uploadConfig como prametro.

/*
 * ROTAS
 * Configuração de rotas.
 * Post
 * Get
 */

/*
 * METHOD POST
 * /sessions
 * /spots
 * /spots/spost_id/booking
 */

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.post('/spots/:spot_id/bookings', BookingController.store);

/*
 * METHOD GET
 * /spots
 * /dashboard
 */

routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);



module.exports = routes; //exportando as rotas.