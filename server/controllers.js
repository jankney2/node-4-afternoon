const swag= require('./models/swag')
const users= require('./models/users')
let id= 1


module.exports= {

  readSwag: (req, res) => {
    res.status(200).send(swag)
  },

  authController: {
    login:(req, res)=>{
      console.log('login hit')
      const {session}= req 
      const {username, password} =req.body

      const oneUser= users.find(user=> user.username===username&&user.password===password)

      if(oneUser) {
        session.user.username=oneUser.username
        res.status(200).send(session.user)
      }else {
        res.status(500).send('unauthorized')
      }
    },
    
    
    register:(req, res)=>{
      console.log("register hit", req.session)
      console.log(req.body)


    
      users.push({id,
        username: req.body.username, 
        password:req .body.password})
      id++

        req.session.user.username=req.body.username

      res.status(200).send(req.session.user)
    },
    
    
    signout:(req, res)=>{
      req.session.destroy()
      res.status(200).send(req.session)
    },

    getUser:(req, res)=>{
      const {session}= req
      res.status(200).send(session.user)

}
  }



}