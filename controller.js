const axios = require('axios')

module.exports = {
  productsService: (request, response) => {
    // response.redirect(`localhost:5000` + `${request.originalUrl}`)
    axios.get(`http://localhost:5000` + `${request.originalUrl}`)
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        response.send(axiosResponse.data)
      })
      .catch((error) => {
        response.send(error)
      })
  }
}