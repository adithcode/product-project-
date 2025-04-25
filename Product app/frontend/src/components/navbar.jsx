import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <AppBar color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:13 }}>
         <b>Product App</b>
          </Typography>
          <Button><Link to={'/Sign'} style={{textDecoration:'none',color:'white'}}>SIGN UP</Link></Button>
          <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}}>LOGIN</Link></Button>
          
          <Button><Link to={'/admin'} style={{textDecoration:'none',color:'white'}}>ADMIN</Link></Button>
        </Toolbar>
      </AppBar>
      </AppBar>
    </Box>
      
    </div>
  )
}

export default Navbar
