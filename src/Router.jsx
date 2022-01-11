import './Styles.css'
import React from 'react'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
// import { yellow } from '@mui/material/colors'

const Router = () => {
    const theme = createTheme({
        palette: {
            // mode: 'dark'
            primary: {
                main: '#000'
            },
            background: {
                default: '#F9F9F9'
            }
        },
        typography: {
            fontFamily: 'Calibri, Arial',
            h1: { fontFamily: 'Comfortaa, Arial'},
            h2: { fontFamily: 'Comfortaa, Arial'},
            h3: { fontFamily: 'Comfortaa, Arial'},
            h4: { fontFamily: 'Comfortaa, Arial'},
            h5: { fontFamily: 'Comfortaa, Arial'},
            h6: {fontFamily: 'Comfortaa, Arial'},
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