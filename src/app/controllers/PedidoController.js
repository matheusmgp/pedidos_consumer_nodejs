
const httpResponse = require('../httpResponse/httpResponse');
const PedidoService = require('../services/pedido/PedidoService')


module.exports = {

    async findAllByCnpj(req, res){
        const { cnpj } = req.params
        const pedidos = await PedidoService.findAllByCnpj(cnpj);
        httpResponse.responseStatus(pedidos, res);       
    },

}