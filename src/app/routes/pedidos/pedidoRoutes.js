const { celebrate, Segments  } = require('celebrate');
const express = require('express')
const PedidoController = require('../../controllers/PedidoController')
//const validation = require('../../validators/UserValidator')
const authMiddleware = require('../../middlewares/auth')


const routes = express.Router();
routes.use(authMiddleware);

routes.get('/orders/:cnpj', PedidoController.findAllByCnpj);


module.exports = routes;