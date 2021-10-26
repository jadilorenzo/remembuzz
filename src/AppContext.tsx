import React, { createContext } from 'react'

export const AppContext = createContext<any>({})

export const AppContextProvider = (props: {
    children: any
}) => {
    const state = { loading: false }
    return (
        <AppContext.Provider value={state}>
            <div>{props.children}</div>
        </AppContext.Provider>
    )
}