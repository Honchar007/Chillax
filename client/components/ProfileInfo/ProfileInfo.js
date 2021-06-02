import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { useSession, getSession } from 'next-auth/client'
import styled from 'styled-components'
import CustomTimeLine from '../CustomTimeLine'
import Link from 'next/link'

const Wrapper = styled.div`
  margin-top: 20px;
  background: white;
  border-radius: 6px;

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
    width: 150px;
    height: 150px;

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
        {this.state?.session.user != null && (
          <div>
            <div>
              <ProfileName className="profile_name">
                <TypographyName className="name">
                  {this.props.userInfo[0].nickName}
                </TypographyName>
                <TypographyTitle className="title">
                  {this.props.userInfo[0].github}
                </TypographyTitle>
              </ProfileName>
              <ProfileImage className="profile_image">
                <img src={this.props.userInfo[0].photo} alt="" />
              </ProfileImage>
            </div>
            <CustomTimeLine
              github={this.props.userInfo[0].github}
              instagram={this.props.userInfo[0].instagram}
              telegram={this.props.userInfo[0].telegram}
            ></CustomTimeLine>
            <Split></Split>
            {this.state?.session.user.name == this.props.userInfo[0].github && (
              <Link href={`/createParty`} passHref>
                <FormBtn color="inherit">Create Party</FormBtn>
              </Link>
            )}
          </div>
        )}
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
