import React, { createContext, useState, useEffect } from 'react'
import {get, post} from './api'
import {useHistory, useParams} from 'react-router-dom'
import {User, Set, Word} from './types'
// import Pusher from 'pusher-js'

export const AppContext = createContext<any>({})

export const AppContextProvider = (props: {
    children: any
}) => {
    const params : any = useParams()

    const [users,setUsers] = useState<User[]>([])
    const [sets, setSets] = useState<Set[]>([])
    const [words, setWords] = useState<Word[]>([])
    const [buzzWords, setBuzzWords] = useState<Word[]>([])
    
    const {replace} = useHistory()
    const isLoggedInAlready = window.localStorage.getItem('login')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const [isInTest, setIsInTest] = useState<boolean>(false)
    const [login, setLogin] = useState(isLoggedInAlready === 'true')
    const [addSet, setAddSet] = useState(false)
    const [addWord, setAddWord] = useState(false)

    const [userid, setUserId] = useState('')
    const [setid, setSetId] = useState(
        window.localStorage.getItem('setid') || params.setid || ''
    )
    const [wordid, setWordId] = useState(
        window.localStorage.getItem('wordid') || params.wordid || ''
    )

    const selectedWords = words.filter(
        (word: Word) => `${word.setid}` === `${setid}`
    )

    const selectedSet = sets.filter(
        (s: Set) => `${s.id}` === `${setid}`
    )[0] || { name: 'No set selected...' }

    const setSelected : boolean = selectedSet.name !== 'No set selected...'

    const selectedWord = words.filter(
        (word: Word) => `${word.id}` === `${wordid}`
    )[0] || { term: 'No word selected...', definition: '' }

    const wordSelected: boolean = selectedSet.name !== 'No word selected...'



    
    const [loading, setLoading] = useState<boolean>(true)

    // const pusher = new Pusher('922ac30666e5c94d5e7a', {
    //     cluster: 'us2',
    // })
    // const channel = pusher.subscribe('db')
    // channel.bind('update', () => {
        
    // })

    useEffect(() => {
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
        window.localStorage.setItem('setid', id)
    }

    const state = {
        users,
        sets,
        words,
        loading,
        buzzWords,

        setSelected,
        selectedSet,
        selectedWords,
        wordSelected,
        selectedWord,

        continueToAppPage,
        checkLogin,
        selectSet,
        handleLogin,
        setBuzzWords,

        showLogin,
        setShowLogin,
        isInTest,
        setIsInTest,
        addSet,
        setAddSet,
        addWord,
        setAddWord,

        username,
        setUsername,
        password,
        setPassword,
        login,
        setLogin,
        userid,
        setUserId,
        setid,
        setSetId,
        wordid,
        setWordId,
    }

    console.log('provider', state)

    return (
        <AppContext.Provider value={state}>
            <div>{props.children}</div>
        </AppContext.Provider>
    )
}