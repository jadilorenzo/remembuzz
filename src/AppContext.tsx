import React, { createContext, useState, useEffect } from "react";
import {get} from './api'
import {useHistory} from 'react-router-dom'
import {User, Set, Word} from './types'

export const AppContext = createContext<any>({})

export const AppContextProvider = (props: {
    children: any
}) => {
    const {replace, location} = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const [login, setLogin] = useState(false)
    const [addSet, setAddSet] = useState(false)
    const [addWord, setAddWord] = useState(false)
    const [userid, setUserId] = useState('0')
    const [users, setUsers] = useState<User[]>([])
    const [sets, setSets] = useState<Set[]>([])
    const [words, setWords] = useState<Word[]>([])

    useEffect(() => {
        get('users').then(setUsers)
        get('sets').then(setSets)
        get('words').then(setWords)
    }, [addSet, addWord, location])

    const continueToAppPage = () => {
        replace("/sets")
    }

    const checkLogin = () => {
        if (users.filter(user => user.name === username).length > 0) {
            replace("/sets")
            setShowLogin(false)
            setLogin(true)
            setUserId(users.filter(user => user.name === username)[0].id)
        }
    }

    const handleLogin = () => {
        if (login) {
            setLogin(false)
        } else {
            setShowLogin(bool => !bool)
        }
        replace('/')
    }

    const selectSet = (id: string) => {
        replace(`/terms/${id}`) 
    }

    const state = {
        users,
        sets,
        words,
        continueToAppPage,
        username, setUsername,
        password, setPassword,
        checkLogin,
        login, setLogin,
        showLogin, setShowLogin,
        selectSet,
        addSet, setAddSet,
        userid, setUserId,
        addWord, setAddWord,
        handleLogin
    }

    console.log('provider', state)

    return (
        <AppContext.Provider value={state}>
            <div>{props.children}</div>
        </AppContext.Provider>
    )
}