const PedidoRepository = require('../../repositories/PedidoRepository');
const bcrypt = require('bcryptjs');
module.exports = {
  async findAllByCnpj(cnpj) {
    const retorno = await PedidoRepository.findAllByCnpj(cnpj);
    return !retorno ? { message: 'Não foi possivel retornar os pedidos' } : retorno;
  },

  async create(payload) {
    const { numero, itens, cnpj, status } = payload;
    const found = await PedidoRepository.findOne({ numero, cnpj });

    if (found) {
      return await this.update(found, payload);
    }
    await PedidoRepository.create(payload);
  },

  async update(found, payload) {
    return await PedidoRepository.update(found._id, payload);
  },
};
