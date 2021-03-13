import React, {useContext} from 'react'
import { AppContext } from '../AppContext'
import { Button, Card, Container, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useUpdateId from '../useUpdateId'

const LoginPage = () => {
    const { 
        username, setUsername,
        password, setPassword,
        checkLogin
    } = useContext(AppContext)
    
    useUpdateId()

    return (
        <div>
            <Container>
                <Card>
                    <h1>Login</h1>
                    <div className='input'>
                        <div>Username</div>
                        <TextField variant='outlined' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <br/>
                        <div>Password</div>
                        <TextField variant='outlined' value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                        <br />
                        <div>
                            <Link to='/'><Button variant='outlined'>Cancel</Button></Link>
                            {' '}
                            <Button variant='contained' color='primary' onClick={checkLogin}>Go</Button>
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default LoginPage