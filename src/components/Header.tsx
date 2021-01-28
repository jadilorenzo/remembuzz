import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import {Typography, Button} from "@material-ui/core";

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
                    </span>
                </Typography>
            </div> 
            <div style={{ flexGrow: 1 }} />
            <div className='header-buttons'>
                <Button onClick={() => history.push('/')}>Home</Button>
                <Button onClick={handleLogin}>{(!login ? (!(showLogin && history.location.pathname === '/') ? 'Login' : 'Close') : 'Logout')}</Button>
            </div>
        </div>
    )
}

export default Header