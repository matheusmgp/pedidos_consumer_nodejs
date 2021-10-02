
const messageBroker = require("./messageBroker");
const pedidoService = require('../pedido/PedidoService')

messageBroker.consume("pedidos", message => {
    if(message){
        //console.log("processing " + message.content.toString());
        pedidoService.create(JSON.parse(message.content.toString()));
    }
    
})