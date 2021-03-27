const axios = require('axios')

module.exports = {
  productsService: (request, response) => {
    console.log(request.originalUrl)
    axios.get(`http://ec2-52-53-149-154.us-west-1.compute.amazonaws.com` + `${request.originalUrl}`)
      .then((axiosResponse) => {
        console.log('getting data back')
        response.send(axiosResponse.data)
      })
      .catch((error) => {
        response.send(error)
      })
  }
}