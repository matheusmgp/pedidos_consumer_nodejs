const { Router } = require('express');
const PedidoController = require('../../controllers/PedidoController');
const authMiddleware = require('../../middlewares/auth');

const routes = Router();
routes.use(authMiddleware);

routes.get('/orders/:cnpj', PedidoController.findAllByCnpj);

module.exports = routes;
