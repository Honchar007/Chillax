import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
export class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile container_shadow">
        <div className="profile_name">
          <Typography classname="name">Sam</Typography>
          <Typography classname="title">Sam</Typography>
        </div>
        <figure className="profile_image">
          <img src="" alt="" />
        </figure>
        <div className="profile_info">
          Insert timeline information
          <br></br>
          <button>My button</button>
        </div>
      </div>
    )
  }
}

export default ProfileInfo
