/*
 * CNFIGURAÇÃO DE UPLOAD DE IMAGENS
 * Multer
 * Path
 */
const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({

        //caminho de pasta para armazenar a imagen
        destination: path.resolve(__dirname, '..', '..', 'uploads'),

        //Construindo o nome da imagen.
        filename: (req, file, cb) => {
             
            const ext =  path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            //Callback de contrução do nome da imagen
            cb(null, `${name}-${Date.now()}${ext}`);

        },
    })

}