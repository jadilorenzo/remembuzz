import React from 'react'
import logo from '../Logo.png'
import Typewriter from 'typewriter-effect'
import {Button, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'

const FrontPage = () => {
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
                        typewriter.typeString('Trying to memorize long passages?').start()
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
                        typewriter.typeString('This is for you.').start()
                    }}
                />
            </Typography>
            <br/>
            <Button variant="outlined">Sell Me.</Button>
            {' '}
            <Link to='/0/0/app/sets'><Button variant="contained" color='primary'>I'm sold.</Button></Link>
        </div>
    )
}

export default FrontPage