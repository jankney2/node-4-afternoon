const swag= require('./models/swag')


module.exports= {

  readSwag: (req, res) => {
    res.status(200).send(swag)
  }



}