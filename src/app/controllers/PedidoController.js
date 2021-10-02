
const httpResponse = require('../httpResponse/httpResponse');
const PedidoService = require('../services/pedido/PedidoService')


module.exports = {

    async findAll(req, res){
        const pedidos = await PedidoService.find();
        httpResponse.responseStatus(pedidos, res);       
    },

    async findById(req, res){
        const { _id } = req.params
        const pedido = await PedidoService.findOne( _id );
       
        httpResponse.responseStatus(pedido, res);       
    },

    async create(req, res){
        const { numero,itens,cnpj,status } = req.body
        let payload = { numero,itens,cnpj,status}

        const retorno = await PedidoService.create(payload);
        httpResponse.responseStatus(retorno, res);       
    },

    async update(req, res){
       
        const { numero,itens,cnpj,status } = req.body
        let payload = { numero,itens,cnpj,status}

        const pedido = await PedidoService.update( _id , payload);
        httpResponse.responseStatus(pedido, res); 
    },

   


}