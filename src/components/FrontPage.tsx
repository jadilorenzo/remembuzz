import React, { useContext } from 'react'
import logo from '../Logo.png'
import Typewriter from 'typewriter-effect';
import { AppContext } from '../AppContext';
import {Button, Typography} from '@material-ui/core'

const FrontPage = () => {
    const { continueToAppPage } = useContext(AppContext)

    return (
        <div>
            <img alt='learn' src={logo} style={{ width: '6rem' }} />
            <Typography variant='h4'>
                <Typewriter
                    options={{
                        cursor:'',
                        delay: 30
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Trying to memorize long passages?").start();
                    }}
                />
            </Typography>
            <Typography variant='h6'>
                <Typewriter
                    options={{
                        cursor: '',
                        delay: 30
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("This is for you.").start();
                    }}
                />
            </Typography>
            <br/>
            <Button variant="outlined">Sell Me.</Button>
            {" "}
            <Button onClick={continueToAppPage} variant="contained" color='primary'>I'm sold.</Button>
        </div>
    )
}

export default FrontPage