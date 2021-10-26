import './Styles.css'
import React from 'react'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import { ThemeProvider, CssBaseline } from '@material-ui/core'


const Router = () => {

    return (
        <ThemeProvider>
            <CssBaseline />
            <BrowserRouter>
                <AppContextProvider>
                    <Switch>
                        <Route><App/></Route> 
                    </Switch>
                </AppContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Router