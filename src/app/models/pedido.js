const mongoose = require('../infra/database')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const PedidoSchema = new mongoose.Schema({
    numero: {
        type:String,
        required: true
    },
    itens: [{
        nome: {type: String, max: 55}, 
        qtd: {type: Number, max: 100}, 
    }],
    cnpj: {
        type:String,
        required: true
        
    },
    status: {
        type: Boolean,
        default: true
    },
   
},
{
    timestamps: true,
    toJSON: { virtuals : true , getters : true},
    toObject : { virtuals : true , getters : true}
}


);

const Pedido = mongoose.model('Pedido', PedidoSchema);

module.exports = Pedido;