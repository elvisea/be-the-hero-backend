const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*')
    return response.json(ongs)
  },

  async create(request, response) {
    const { name, email, whats, cidade, uf } = request.body;

    const id = generateUniqueId()

    await connection('ongs').insert({
      id,
      name,
      email,
      whats,
      cidade,
      uf
    })

    return response.json({ id });
  }
}
