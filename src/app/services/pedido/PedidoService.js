const PedidoRepository = require('../../repositories/PedidoRepository')
const bcrypt = require('bcryptjs')
module.exports = {

    async findAllByCnpj(cnpj){
        const retorno = await PedidoRepository.findAllByCnpj(cnpj);
        return !retorno ? { message: 'Não foi possivel retornar os pedidos'} : retorno;    
    },

    async create(payload){
        const { numero,itens,cnpj,status } = payload
        const found = await PedidoRepository.findOne({numero,cnpj}); 
      
        if(found){           
            await this.update(found,payload);
            return
        }
        await PedidoRepository.create(payload);
    },

    async update( found,payload){       
        const updated = await PedidoRepository.update(found._id, payload);       
    },

   


}