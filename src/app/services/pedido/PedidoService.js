const PedidoRepository = require('../../repositories/PedidoRepository')
const bcrypt = require('bcryptjs')
module.exports = {

    async find(){
        const retorno = await PedidoRepository.findAll();
        return !retorno ? { message: 'Não foi possivel retornar os pedidos'} : retorno;    
    },

    async findOne(_id){       
        const retorno = await PedidoRepository.findById( _id );
        return !retorno ? { message: 'Pedido não encontrado'} : retorno;
    },

    async create(payload){
        console.log(payload)
        const { numero,itens,cnpj,status } = payload
        
      
        const created = await PedidoRepository.create(payload);

       /* let retorno = {
            created,
            message: ''
        }

        return !retorno ? { message: 'Não foi possivel cadastrar'} :  retorno;*/
           
    },
/*
    async update(_id, payload){ 
        const {  email,password,password_repeat,cnpj , status} = payload
        var oldUser = await UserRepository.findOne({_id: _id})

        if(password != '' && password_repeat != ''){

            if(password != password_repeat) return { ...payload, message: 'Senhas divergentes'}

            const hash = await bcrypt.hash(password, 10);
            payload.password = hash; 

        }else{
            payload.password = oldUser.password
            payload.password_repeat = oldUser.password_repeat
        }
        
        var newUserEmail = await UserRepository.findOne({email: email})
        var newUserCnpj = await UserRepository.findOne({cnpj: cnpj})

        if(newUserEmail){
            if(oldUser.email != newUserEmail.email) return { ...payload, message: 'E-mail já cadastrado'} 
        }
        if(newUserCnpj){
            if(oldUser.email != newUserCnpj.email) return { ...payload, message: 'CNPJ já cadastrado'}
        }

        
        const updated = await UserRepository.update(_id, payload);
        let retorno = {
            updated,
            message: ''
        }
        return !retorno ?  { ...payload, message: 'Não foi possivel cadastrar'} : retorno;
    },

   */


}