export const messageFunc = (message, setState) => {
  const dataFromServer = JSON.parse(message.data)
  if (dataFromServer.type == 'message') {
    setState((state) => ({
      messages: [
        ...state.messages,
        { msg: dataFromServer.msg, user: dataFromServer.user },
      ],
    }))
  }
}
