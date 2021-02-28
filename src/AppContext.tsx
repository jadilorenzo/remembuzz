import React, { createContext, useState, useEffect } from 'react'
import {get, post} from './api'
import {useHistory} from 'react-router-dom'
import {User, Set, Word} from './types'
// import Pusher from 'pusher-js'

export const AppContext = createContext<any>({})

export const AppContextProvider = (props: {
    children: any
}) => {
    const {replace} = useHistory()
    const isLoggedInAlready = window.localStorage.getItem('login')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const [isInTest, setIsInTest] = useState<boolean>(false)
    const [login, setLogin] = useState(isLoggedInAlready === 'true')
    const [addSet, setAddSet] = useState(false)
    const [addWord, setAddWord] = useState(false)
    const [userid, setUserId] = useState('1')
    const [users,setUsers] = useState<User[]>([])
    const [sets, setSets] = useState<Set[]>([])
    const [words, setWords] = useState<Word[]>([])
    const [buzzWords, setBuzzWords] = useState<Word[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    // const pusher = new Pusher('922ac30666e5c94d5e7a', {
    //     cluster: 'us2',
    // })
    // const channel = pusher.subscribe('db')
    // channel.bind('update', () => {
        
    // })

    useEffect(() => {
        const id = setInterval(() => {
            get('users')
                .then((users: User[]) => {
                    setUsers(users)
                })
                .then(() => {
                    get('sets')
                        .then((sets: Set[]) => {
                            setSets(sets)
                        })
                        .then(() => {
                            get('words')
                                .then((words: Word[]) => {
                                    setWords(words)
                                })
                                .then(() => {
                                    setLoading(false)
                                })
                        })
                })
            clearInterval(id)
        }, 1500)
    }, [addSet, addWord, location.pathname])
    
    const continueToAppPage = () => {
        replace('/sets')
    }

    const checkLogin = async () => {
        post('login', {username, password}).then((r) => {
            if (r.result) {
                replace('/sets')
                setShowLogin(false)
                setLogin(true)
                setUserId(users.filter(user => user.name === username)[0].id)
                window.localStorage.setItem('login', 'true')
            } else {
                alert('Failed login...')
            }
        })
        
    }

    const handleLogin = () => {
        if (login) {
            setLogin(false)
            window.localStorage.setItem('login', 'false')
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
        username,
        setUsername,
        password,
        setPassword,
        checkLogin,
        login,
        setLogin,
        showLogin,
        setShowLogin,
        isInTest,
        setIsInTest,
        selectSet,
        addSet,
        setAddSet,
        userid,
        setUserId,
        addWord,
        setAddWord,
        buzzWords,
        setBuzzWords,
        handleLogin,
        loading,
    }

    console.log('provider', state)

    return (
        <AppContext.Provider value={state}>
            <div>{props.children}</div>
        </AppContext.Provider>
    )
}