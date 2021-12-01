import './Styles.css'
import React from 'react'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const Router = () => {
    const theme = createTheme({
        palette: {
            // mode: 'dark'
            background: {
                default: '#F9F9F9'
            }
        },
        typography: {
            fontFamily: 'Calibri',
            h1: { fontFamily: 'Comfortaa'},
            h2: { fontFamily: 'Comfortaa'},
            h3: { fontFamily: 'Comfortaa'},
            h4: { fontFamily: 'Comfortaa'},
            h5: { fontFamily: 'Comfortaa'},
            h6: {fontFamily: 'Comfortaa'},
            button: {fontFamily: 'Roboto'}
        },
        props: {
            AppBar: {
                variant: 'outlined'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
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