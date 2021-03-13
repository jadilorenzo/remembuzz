import React from 'react'
import { useHistory } from 'react-router-dom'
import {Typography, Button} from '@material-ui/core'

const Header = () => {
    const history = useHistory()

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
                <a href='/'><Button onClick={() => history.push('/')}>Home</Button></a>
                <a href='/0/0/app/login'>
                    <Button>Login</Button>
                </a>
            </div>
        </div>
    )
}

export default Header