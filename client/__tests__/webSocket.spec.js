import 'jest'

import { WebSocket, Server } from 'mock-websocket'
test('mock sockets sends double messages', () => {
  const socketUrl = 'ws://localhost:8080'
  const mockServer = new Server(socketUrl)
  const mockSocketA = new WebSocket(socketUrl)
  const mockSocketB = new WebSocket(socketUrl)

  let numMessagesSent = 0
  let numMessagesReceived = 0

  const serverMessageHandler = function handlerFunc() {
    numMessagesReceived += 1
  }

  mockServer.on('connection', () => {
    mockServer.on('message', serverMessageHandler)
  })

  mockSocketA.onopen = function open() {
    numMessagesSent += 1
    this.send('1')
  }

  mockSocketB.onopen = function open() {
    numMessagesSent += 1
    this.send('2')
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      expect(numMessagesReceived).toBe(numMessagesSent)
      mockServer.close()
      resolve()
    }, 500)
  })
})
test('that server on(message) argument should be a string and not an object', (done) => {
  const socketUrl = 'ws://localhost:8080'
  const mockServer = new Server(socketUrl)
  const mockSocket = new WebSocket(socketUrl)

  mockServer.on('connection', () => {
    mockServer.on('message', (sock, message) => {
      expect(message).toBe('1')
      expect(typeof message).toBe('string')
      mockServer.close()
      done()
    })
  })

  mockSocket.onopen = function open() {
    this.send('1')
  }
})
test('websocket onmessage fired before onopen', (done) => {
  const socketUrl = 'ws://localhost:8080'
  const mockServer = new Server(socketUrl)
  const mockSocket = new WebSocket(socketUrl)

  let onOpenCalled = false

  mockServer.on('connection', () => {
    mockServer.send('test message')
  })

  mockSocket.onopen = () => {
    onOpenCalled = true
  }

  mockSocket.onmessage = () => {
    expect(onOpenCalled).toBeTruthy()
    done()
  }
})
