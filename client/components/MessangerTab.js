import React, { Component } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { Card, Input, Avatar, Typography } from 'antd'
const { Text } = Typography
const { Meta } = Card
const { Search } = Input
const client = new W3CWebSocket('ws://127.0.0.1:8000')
export class MessangerTab extends Component {
  state = {
    userName: '',
    isLoggedIn: false,
    messages: [],
  }

  onButtonClicked = (value) => {
    client.send(
      JSON.stringify({
        type: 'message',
        msg: value,
        user: this.state.userName,
        img: this.state.img,
      })
    )
    this.setState({ searchVal: '' })
  }
  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected')
    }
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data)
      if (dataFromServer.type == 'message') {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            { msg: dataFromServer.msg, user: dataFromServer.user },
          ],
        }))
      }
    }
  }

  render() {
    this.state.userName = this.props.name
    this.state.isLoggedIn = this.props.loggedIn
    this.state.img = this.props.img

    return (
      <>
        {this.props.name != null ? (
          <div>
            <button
              data-testid="buttonHello"
              onClick={() => this.onButtonClicked('Hello')}
            >
              Send Hello
            </button>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: 50,
              }}
              id="messages"
            >
              {this.state.messages.map((message) => (
                <Card
                  key={message.msg + new Date.now()}
                  style={{
                    width: 300,
                    margin: '16px 4px 0 4px',
                    alignSelf:
                      this.state.userName === message.user
                        ? 'flex-end'
                        : 'flex-start',
                  }}
                  loading={false}
                >
                  <Meta
                    avatar={
                      <Avatar
                        src={this.state.img}
                        style={{
                          color: '#f56a00',
                          backgroundColor: 'red',
                        }}
                      ></Avatar>
                    }
                    title={message.user + ':'}
                    description={message.msg}
                  />
                </Card>
              ))}
            </div>
            <div>
              <div className="bottom">
                <Search
                  placeholder="input message and send"
                  enterButton="Send"
                  value={this.state.searchVal}
                  size="large"
                  onChange={(e) => this.setState({ searchVal: e.target.value })}
                  onSearch={(value) => this.onButtonClicked(value)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>Not logged</div>
        )}
      </>
    )
  }
}

export default MessangerTab
