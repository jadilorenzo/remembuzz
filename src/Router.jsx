import React from 'react'
import App from './App'
import { BrowserRouter, Switch } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { orange } from '@material-ui/core/colors';

const Router = () => {
    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#43a047'
            }
        },
        typography: {
            fontFamily: 'Montserrat'
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppContextProvider>
                    <Switch><App /></Switch>
                </AppContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Router;