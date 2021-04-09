import React from 'react'
import App from './App'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import { ThemeProvider, createMuiTheme, useMediaQuery, CssBaseline } from '@material-ui/core'
import { green /* green */ } from '@material-ui/core/colors'
import FrontPage from './components/FrontPage'
import LoginPage from './components/LoginPage'
import Header from './components/Header'
import StyledRoute from './components/StyledRoute'

const Router = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: '#43a047',
            },
            // primary: green,
            secondary: {
                main: green[900],
            },
        },
        typography: {
            fontFamily: 'Montserrat',
        },
        props: {
            MuiButtonBase: {
                disableTouchRipple: true,
                style: {
                    borderRadius: '0.5rem',
                },
            },
            MuiPaper: {
                style: {
                    borderRadius: '0.5rem',
                },
            },
            MuiTextField: {
                style: { margin: '1rem', width: '50%' },
            },
            MuiContainer: {
                maxWidth: 'md',
            },
            MuiCard: {
                style: {
                    background: prefersDarkMode ? '#303030' : 'fafafa',
                    padding: '0.5rem',
                    maxHeight: '51vh',
                    overflow: 'scroll',
                    borderRadius: '0.5rem',
                },
                variant: 'outlined',
            },
        },
    })

    theme.shadows = [
        'none',
        'rgba(0, 0, 0, 0.2) 0.1rem 0.1rem',
        'rgba(0, 0, 0, 0.1) 0.2rem 0.2rem',
    ]


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Header />
                <Switch>
                    <StyledRoute exact path="/">
                        <FrontPage />
                    </StyledRoute>
                    <Route path="/:setid/:wordid/app">
                        <AppContextProvider>
                            <StyledRoute exact path="/:setid/:wordid/app/login">
                                <LoginPage />
                            </StyledRoute>
                            <App />
                        </AppContextProvider>
                    </Route>
                    <Route render={(routeProps) => {
                        console.log(routeProps.location.pathname)
                        return <Redirect to="/" />
                    }}/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Router