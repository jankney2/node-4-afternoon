const express= require('express')
const session= require('express-session')
require('dotenv').config()
const {SERVER_PORT, SESSION_SECRET} = process.env
const app= express()
const controller= require('./controllers')
const checkSession= require('./middleware/checkForSession')


app.use(express.json())



app.use(session(
  {
    secret: SESSION_SECRET, 
    resave: false, 
    saveUninitialized: true
  }
))

app.use(checkSession.checkForSession)

app.get('/api/swag', controller.readSwag)


app.listen(SERVER_PORT, ()=> console.log("listening on ", SERVER_PORT))


