const axios = require('axios')

module.exports = {
  productsService: (request, response) => {
    console.log(request.originalUrl)
    axios.get(`http://localhost:5000` + `${request.originalUrl}`)
      .then((axiosResponse) => {
        console.log('getting data back')
        response.send(axiosResponse.data)
      })
      .catch((error) => {
        // response.send(error)
      })
  }
}