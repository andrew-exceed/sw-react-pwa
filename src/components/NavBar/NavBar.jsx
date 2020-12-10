import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Link as UILink,
    Button,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

import './NavBar.scss'

export const NavBar = ({ userInfo, logoutUser }) => {

    return (
        <AppBar position="fixed" >
            <Toolbar className="navBar">
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                {userInfo.isAuth ?
                    <>
                        <UILink color='initial' className='whiteLink' variant="h6" component={Link} to='/' >
                            SW Films
                        </UILink>
                        <Typography>{userInfo.email}</Typography>
                        <Button variant="contained" color="primary" onClick={() => {logoutUser()}}>Logout</Button>
                    </>
                :
                    <>
                        <UILink color='initial' className='whiteLink' variant="h6" component={Link} to='/auth' >
                            SignUp_ _
                        </UILink>
                        <UILink color='initial' className='whiteLink' variant="h6" component={Link} to='/signin' >
                            SignIn
                        </UILink>
                    </>
                }
            </Toolbar>
        </AppBar>
    );
};

export default  NavBar