import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {


    return(
        <React.Fragment>
             <CssBaseline />
      <AppBar className='navBarPostion' >
        <Toolbar>
          <Link to={'/'} className="navElementPosition" > Home </Link>
          <Link to={'/services'} className="navElementPosition" > Services </Link>
          <Link to={'/about-us'} className="navElementPosition" > About us </Link>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
        </React.Fragment>
    )
}