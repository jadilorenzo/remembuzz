import React from 'react'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import { ThemeProvider, createMuiTheme, useMediaQuery, CssBaseline } from '@material-ui/core'
import { green /* green */ } from '@material-ui/core/colors';

const Router = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: '#43a047'
            }, 
            // primary: green,
            secondary: {
                main: green[900]
            }
        },
        typography: {
            fontFamily: 'Montserrat'
        },
        props: {
            MuiButtonBase: {
                disableTouchRipple: true
            },
            MuiTextField: {
                style: { margin: '1rem', width: '50%' }
            }, 
            MuiContainer: {
                maxWidth: 'md'
            },
            MuiCard: {
                style: {
                    background: prefersDarkMode ? '#303030' : 'fafafa' ,
                    padding: '0.5rem',
                    maxHeight: '51vh',
                    overflow: 'scroll'
                },
                variant: 'outlined'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <AppContextProvider>
                    <Switch><App /><Route>404</Route></Switch>
                </AppContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Router;