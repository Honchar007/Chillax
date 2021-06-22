import { w3cwebsocket as W3CWebSocket } from 'websocket'

export const client = new W3CWebSocket('ws://127.0.0.1:8000')

export function sendMessage(userName, img, value) {
  client.send(
    JSON.stringify({
      type: 'message',
      msg: value,
      user: userName,
      img: img,
    })
  )
}
export const state = {
  userName: '',
  isLoggedIn: false,
  messages: [],
}
client.onopen = () => {
  console.log('WebSocket Client Connected')
}
/*client.onmessage = (message) => {
  const dataFromServer = JSON.parse(message.data)
  if (dataFromServer.type == 'message') {
    dispatch(setMessages(dataFromServer.msg, dataFromServer.user))
  }
}*/

export function checkMessage(message, setS, st) {
  const dataFromServer = JSON.parse(message.data)
  if (dataFromServer.type == 'message') {
    console.log(dataFromServer.msg)
    console.log(state.messages)

    Object.assign({}, state, {
      messages: [
        ...state.messages,
        {
          msg: dataFromServer.msg,
          user: dataFromServer.user,
        },
      ],
    })
  }
}
