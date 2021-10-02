const { celebrate, Segments  } = require('celebrate');
const express = require('express')
const PedidoController = require('../../controllers/PedidoController')
//const validation = require('../../validators/UserValidator')
//const authMiddleware = require('../../middlewares/auth')


const routes = express.Router();
//routes.use(authMiddleware);

routes.get('/orders', PedidoController.findAll);

routes.post('/orders', PedidoController.create);

routes.patch('/orders/:_id', PedidoController.update);

routes.get('/orders/:_id', PedidoController.findById);

//routes.delete('/orders/:_id',celebrate({[Segments.PARAMS]: validation.get_delete }), UserController.delete);


module.exports = routes;