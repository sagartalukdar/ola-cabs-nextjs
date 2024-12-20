"use client"

import { Inbox, Mail, MenuOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'


const DrawerList=(anchor) => (
  <Box sx={{ width: anchor ==="top" || anchor==='bottom'?'auto':250 }} role="presentation">
    <List>
      {['Book Your Ride','Rate Card','Support'].map((text, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
             <Inbox /> 
          </ListItemIcon>
          <ListItemText primary={"Your Ride"} />
        </ListItemButton>
      </ListItem>
    </List>
   
  </Box>
);

const BookRideNavbar = () => {
  const [sideBarOpen,setSideBarOpen]=useState(false);
  const handleSideBar=()=>{
    setSideBarOpen(!sideBarOpen);
  }
  return (
    <Box>
      <AppBar sx={{backgroundColor:'#120E43'}} className='' position='static'>
        <Toolbar>
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSideBar}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ola cabs
          </Typography>
          {true?
           <Avatar className='cursor-pointer' sx={{bgcolor:deepOrange[500]}}>
            A
           </Avatar>
          :<Button color="inherit">Login</Button>  }
          
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sideBarOpen} onClose={handleSideBar}>
        {DrawerList ("left")}
      </Drawer>
    </Box>
  )
}

export default BookRideNavbar
