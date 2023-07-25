const messageBroker = require('./messageBroker');
const pedidoService = require('../pedido/PedidoService');

messageBroker.consume('pedidos', (message) => {
  console.log(message.content.toString());
  if (message) {
    console.log(JSON.parse(message.content.toString()));
    pedidoService.create(JSON.parse(message.content.toString()));
  }
});
