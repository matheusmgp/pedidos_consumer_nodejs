const Pedido = require('../models/pedido');


module.exports = {

    async findAll(){
        return await Pedido.find();       
    },

    async findById(_id){       
       return await Pedido.findOne({ _id });       
    },

    async create(payload){      
        return await Pedido.create(payload);     
    },

    async update(_id, payload){
        return  await Pedido.findByIdAndUpdate({ _id }, payload, { new : true });        
    },

    


}
