/**
 * SESSION CONTROLLER
 * Metodos usado no Controller ( index, show, store, update, destroy ).
 */
const User = require('../models/User');

module.exports = {

    //Store
    async store(req, res) {

        //Pegando o Email do usuario.
        const { email } = req.body;

        //Buscando email.
        let user = await User.findOne({ email });

        //Verificando se o usuario existe no banco.
        //Se não existir então ele é criado.
        if (!user) {

            //Criando usuario no banco de dados
            user = await User.create({ email });
        }

        //retornando a resposta. 
        return res.json(user);

    }

}