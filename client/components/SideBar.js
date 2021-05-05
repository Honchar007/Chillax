import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import styled from 'styled-components'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}
const ListStyle = {
  color: '#0ef19a',
  width: '200px',
}
const colorIcon = {
  color: '#0ef19a',
}

export default function SideBar() {
  return (
    <div>
      <List style={ListStyle} component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon style={colorIcon} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon style={colorIcon} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List
        style={ListStyle}
        component="nav"
        aria-label="secondary mailbox folders"
      >
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink>
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  )
}
