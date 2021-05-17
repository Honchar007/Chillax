const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

const webSocketServerPort = 8000
const webSocketServer = require('websocket').server
const http = require('http')
//spinning http server and websocket server
const server = http.createServer()
server.listen(webSocketServerPort)

const wsServer = new webSocketServer({ httpServer: server })

const clients = {}
const getUniqueId = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  return s4() + s4() + '-' + s4()
}
wsServer.on('request', function (request) {
  var userId = getUniqueId()
  console.log(
    new Date() + 'Received new connection from origin ' + request.origin
  )
  const connection = request.accept(null, request.origin)
  clients[userId] = connection
  console.log(
    'connected ' + userId + ' in ' + Object.getOwnPropertyNames(clients)
  )
  connection.on('message', function (message) {
    if (message.type == 'utf8') {
      console.log('Received message: ', message.utf8Data)
    }

    for (key in clients) {
      clients[key].sendUTF(message.utf8Data)
      console.log('sent message to ', clients[key])
    }
  })
})
app.use(cors())

app.use(express.json({ extended: true }))
app.use('/api/post', require('./routes/post.routes'))

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.co9ei.mongodb.net/ChillaxDb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )

    app.listen(PORT, () => {
      console.log('listen ' + PORT)
    })
  } catch (error) {
    console.log(error.message)
  }
}

start()
