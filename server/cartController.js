const swag = require('./models/swag')


module.exports= {
  add:(req, res)=>{

const index= req.session.user.cart.indexOf(el=>{
  return el.id==req.params.id
})

  if(index===-1){
    let selectedSwag = swag.find(el=> {
     return el.id==req.params.id
    })
    console.log('1111',selectedSwag)
    req.session.user.cart.push(selectedSwag)
    req.session.user.total+=selectedSwag.price
  }

  res.status(200).send(req.session.user)
  }, 

  delete:(req, res)=> 
    {
      const index= req.session.user.cart.indexOf(el=>el.id===req.params.id)


      const selectedSwag= swag.find(el=>{
        return el.id==req.params.id
      })


      if(index){
       req.session.user.cart.splice(index, 1)
       req.session.user.total-=selectedSwag.price

      }

      if(req.session.user.total<0){
        req.session.user.total=0
      }

      res.status(200).send(req.session.user)

    }, 

  checkout:(req, res)=> {


    req.session.user.cart=[]
    req.session.user.total=0

    res.status(200).send(req.session.user)
  }, 
}