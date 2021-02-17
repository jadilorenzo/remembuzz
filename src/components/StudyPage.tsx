import React, { useContext } from 'react'
import { Button, Card, Container } from '@material-ui/core'
import { AppContext } from '../AppContext'
import { useParams } from 'react-router-dom'
import { Set } from '../types'
import BuzzList from './BuzzList'
import BuzzTest from './BuzzTest'

const Flashcards = () =>  {
    const { sets, isInTest, setIsInTest } = useContext(AppContext)
    const { setid } = useParams<any>()
    window.localStorage.setItem('setid', setid)

    const selectedSet = (sets.filter((s: Set) => `${s.id}` === `${setid}`)[0] || { name: 'No set selected...' })

    return (
        <Container>
            <Card>
                <h1>Study</h1>
                <h4>{selectedSet.name}</h4>
                <div>
                    <div>{isInTest ?  <BuzzTest/> : <BuzzList/>}</div>
                    <br/>
                    <Button variant='contained' color={isInTest ? 'secondary' : 'primary'} onClick={() => setIsInTest((b: boolean) => !b)}>{isInTest ? 'Back' : 'Test'}</Button>
                </div>  
            </Card>
        </Container>
    )
}

export default Flashcards