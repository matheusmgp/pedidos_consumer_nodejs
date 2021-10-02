
const messageBroker = require("./messageBroker");
const pedidoService = require('../pedido/PedidoService')

messageBroker.consume("pedidos", message => {
    if(message){       
        pedidoService.create(JSON.parse(message.content.toString()));
    }
    
})