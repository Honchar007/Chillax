import React, { Component } from 'react'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import { missParty, consistObject, visit } from './Utilutil'
import styled from 'styled-components'

const FormBtn = styled.button`
  border: 2px solid;
  background: transparent;
  display: block;
  margin: 25px auto;

  text-align: center;
  padding: 14px 40px;

  outline: none;
  color: #ffffff;
  letter-spacing: 4px;
  border-radius: 25px;
  transition: 0.25s;
  cursor: pointer;
  box-shadow: 0 0 5px #902e99, 0 0 25px #902e99;
  &:hover {
    background: #4e0166;
  }
`

export class ForLoggedMembers extends Component {
  async componentDidMount() {
    const session = await getSession()
    this.setState({ session })
  }

  render() {
    return (
      <div>
        {this.state?.session &&
          !consistObject(
            this.props.theArray,
            this.state?.session.user.name
          ) && (
            <FormBtn
              onClick={() => {
                visit(
                  this.state?.session.user.image,
                  this.state?.session.user.name,
                  this.props.id,
                  this.props.theArray
                )
              }}
              color="inherit"
            >
              Attend it!
            </FormBtn>
          )}
        {this.state?.session &&
          consistObject(this.props.theArray, this.state?.session.user.name) && (
            <FormBtn
              onClick={() => {
                missParty(
                  this.state?.session.user.image,
                  this.state?.session.user.name,
                  this.props.id,
                  this.props.theArray
                )
              }}
              color="inherit"
            >
              Miss this party!
            </FormBtn>
          )}
      </div>
    )
  }
}

export default ForLoggedMembers
