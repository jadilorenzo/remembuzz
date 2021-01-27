import React, {useContext} from 'react'
import { AppContext } from '../AppContext'

const LoginPage = () => {
    const { 
        username, setUsername,
        password, setPassword,
        setShowLogin, 
        checkLogin
    } = useContext(AppContext)

    return (
        <div>
            <h1>Login</h1>
            <div className="container box">
                <div className='input'>
                    <span>Username</span>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <span>Password</span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                    <br />
                    <div>
                        <button className='outlined' onClick={() => setShowLogin(false)}>Cancel</button>
                        <button className='filled' onClick={checkLogin}>Go</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage