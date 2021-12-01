import React, { createContext, useState, useContext } from 'react'
import { AppContext } from '../AppContext'

export const NotebookSearchContext = createContext<any>({})

export const NotebookSearchContextProvider = (props: { children: any }) => {
    const [search, setSearch] = useState('')
    const {notebooks} = useContext(AppContext)
    
    const currentNotebooks = 
        notebooks.filter(n => (
            n.name.toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
        ))
    
    return (
        <NotebookSearchContext.Provider
            value={{ search, setSearch, currentNotebooks }}
        >
            <div>{props.children}</div>
        </NotebookSearchContext.Provider>
    )
}
