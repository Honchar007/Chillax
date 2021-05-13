import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import styled from 'styled-components'
import CustomTimeLine from '../CustomTimeLine'

const Wrapper = styled.div`
  margin-top: 20px;
  background: white;
  border-radius: 6px;
  width: 200px;
  height: 100%;
  text-align: center;
  background-color: #c300ff;
`
const ProfileName = styled.div`
  line-height: 18px;
  padding: 20px;
`

const Split = styled.div`
  margin-top: 10px;
`
const TypographyName = styled(Typography)`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
  align-items: center;
  width: 100%;
`
const FormBtn = styled.button`
  border: 2px solid;
  background: transparent;
  display: block;
  width: 180px;
  margin: 25px auto;
  margin-top: -10px;

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
    background: #a200ff;
  }
`
const TypographyTitle = styled(Typography)`
  font-size: 13px;
  font-weight: bold;
`
const ProfileImage = styled.figure`
  margin-left: 5px;
  margin-top: -10px;

  img {
    margin-top: -10px;

    border-radius: 10px;
  }
`
export class ProfileInfo extends Component {
  async componentDidMount() {
    const session = await getSession()
    this.setState({ session })
  }
  render() {
    let img
    if (this.state?.session.user != null) img = this.state?.session.user.image
    return (
      <Wrapper>
        <div>
          <ProfileName className="profile_name">
            <TypographyName className="name">Sam </TypographyName>
            <TypographyTitle className="title">Sam</TypographyTitle>
          </ProfileName>

          <ProfileImage className="profile_image">
            <img src={img} alt="" />
          </ProfileImage>
        </div>
        <CustomTimeLine></CustomTimeLine>
        <FormBtn>Send Message</FormBtn>

        <Split></Split>
      </Wrapper>
    )
  }
}

export default ProfileInfo
/*{this.state?.session.user.name != '' && (
          <div>
            You are logged in! Hello, {console.log(this.state?.session)}
          </div>
        )}
        {this.state?.session.user.name == '' && (
          <div>You are not logged in</div>
        )}*/
