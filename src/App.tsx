import React, { useContext } from 'react'
import {AppContext} from './AppContext'
import UI from './UI'
import Context from './Context'
import { Route } from 'react-router-dom'

const App = () => {
    const {loading} = useContext(AppContext)   

    if (loading) {
        <div>Loading...</div> 
    } 

    return (
        <div>
            <UI.Header/>
            <Route exact path='/'>
                <UI.Body>
                    <Context.NotebookSearchContextProvider>
                        <UI.NotebookSearch/>
                    </Context.NotebookSearchContextProvider>
                </UI.Body>
            </Route>
            <Route path='/notebooks/1'><UI.Notebook id={1} /></Route>
        </div>
    )
}

export default App
