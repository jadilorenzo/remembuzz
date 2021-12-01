import React, { createContext } from 'react'
import {Notebook, User} from './types'

interface State {
    loading: boolean
    notebooks: Notebook[]
    users: User[],
    currentUser: number
}

const exampleState = {
    loading: false,
    currentUser: 1,
    notebooks: [
        {
            userid: 1,
            id: 1,
            name: 'Notebook',
            notes: [{ type: 'text', data: 'Hello World', style: {fontFamily: 'Roboto'} }],
        },
    ],
    users: [{ id: 1, name: 'Jacob Ezo', preferences: {} }],
}

export const AppContext = createContext<State>(exampleState)

export const AppContextProvider = (props: {
    children: any
}) => {
    return (
        <AppContext.Provider value={exampleState}>
            <div>{props.children}</div>
        </AppContext.Provider>
    )
}