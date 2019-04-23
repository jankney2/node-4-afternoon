const express= require('express')
const session= require('express-session')
require('dotenv').config()
const {SERVER_PORT, SESSION_SECRET} = process.env
const app= express()
const controller= require('./controllers')
const checkSession= require('./middleware/checkForSession')
const cartController= require('./cartController')


app.use(express.json())



app.use(session(
  {
    secret: SESSION_SECRET, 
    resave: false, 
    saveUninitialized: true
  }
))




app.use(checkSession.checkForSession)
app.post('/api/cart/checkout', cartController.checkout)

app.get('/api/swag', controller.readSwag)

app.get('/api/user', controller.authController.getUser)

app.post('/api/login', controller.authController.login)
app.post('/api/register', controller.authController.register)

app.post('/api/signout', controller.authController.signout)


app.post('/api/cart/:id', cartController.add)
app.delete('/api/cart/:id', cartController.delete)


app.listen(SERVER_PORT, ()=> console.log("listening on ", SERVER_PORT))


