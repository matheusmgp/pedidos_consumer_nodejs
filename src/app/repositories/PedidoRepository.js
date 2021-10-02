const Pedido = require('../models/pedido');


module.exports = {

    async findAllByCnpj(cnpj){
        return await Pedido.findOne({cnpj});       
    },    
    async findOne(value){       
        return await Pedido.findOne(value);       
    },
    async create(payload){      
        return await Pedido.create(payload);     
    },

    async update(_id, payload){      
        return  await Pedido.findByIdAndUpdate({ _id }, payload, { new : true });        
    },

    


}
