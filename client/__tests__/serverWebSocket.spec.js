import 'jest'
import { WebSocket, Server, networkBridge } from 'mock-websocket'

test('that callback functions can be added to the listeners object', () => {
  const myServer = new Server('ws://not-real/')

  myServer.on('message', jest.fn())
  myServer.on('close', jest.fn())

  expect(myServer.listeners.get('message')).toHaveLength(1)
  expect(myServer.listeners.get('close')).toHaveLength(1)

  myServer.close()
})

test('that calling clients() returns the correct clients', () => {
  const myServer = new Server('ws://not-real/')
  const socketFoo = new WebSocket('ws://not-real/')
  const socketBar = new WebSocket('ws://not-real/')

  expect(myServer.clients()).toEqual([socketFoo, socketBar])

  myServer.close()
})
