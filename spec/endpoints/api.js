const axios = require('axios');

class Api{
  async getBreeds() {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');

    return response.data.message;
  }
}

module.exports = new Api();
