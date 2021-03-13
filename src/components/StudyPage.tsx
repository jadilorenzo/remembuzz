import React, { useContext } from 'react'
import { Button, Card, Container, Divider } from '@material-ui/core'
import { AppContext } from '../AppContext'
import { Set } from '../types'
import BuzzList from './BuzzList'
import BuzzTest from './BuzzTest'
import useUpdateId from '../useUpdateId'

const Flashcards = () =>  {
    const { sets, isInTest, setIsInTest, setid } = useContext(AppContext)

    const selectedSet = (sets.filter((s: Set) => `${s.id}` === `${setid}`)[0] || { name: 'No set selected...' })

    useUpdateId()

    return (
        <Container>
            <Card>
                <h1>{selectedSet.name}</h1>
                <Divider/>
                <br/>
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