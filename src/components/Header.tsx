import React, { useContext } from "react";
import LoopIcon from '@material-ui/icons/Loop';
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import {Typography, Button} from "@material-ui/core";
import z from '../BuzZ.png'

const Header = () => {
    const history = useHistory()
    const {handleLogin, login, showLogin} = useContext(AppContext)

    return (
        <div className='title'>
            <div>
                <Typography variant='h4'>
                    Remem
                    <span className='primary-text'>
                        Buzz
                        {/* <img src={z} style={{height: '1.85rem', position: 'relative', top: 1.5}} alt=''/> */}
                    </span>
                </Typography>
            </div> 
            <div style={{ flexGrow: 1 }} />
            <div className='header-buttons'>
                <Button onClick={() => history.replace('/')}>Home</Button>
                <Button onClick={handleLogin}>{(!login ? (!(showLogin && history.location.pathname === '/') ? 'Login' : 'Close') : 'Logout')}</Button>
            </div>
        </div>
    )
}

export default Header