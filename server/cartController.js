const swag = require('./models/swag')


module.exports= {
  add:(req, res)=>{

const index= req.session.user.cart.indexOf(el=>{
  return el.id==req.params.id
})

  if(index===-1){
    const selectedSwag= swag.find(el=> {
      el.id==req.params.id
    })

    req.session.user.cart.push(selectedSwag)
    req.session.user.total+=selectedSwag.price
  }

  res.status(200).send(user)
  }, 

  delete:(req, res)=> 
    {
      const index= req.session.user.cart.indexOf(el=>el.id===req.params.id)
      const selectedSwag= swag.find(el=>{
        el.id==req.params.id
      })


      if(index){
       user.cart.splice(index, 1)
       user.total-=selectedSwag.price

      }
      

    }, 

  checkout: {}, 
}