import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import List from './List'
import { Word, Set } from '../types'
import { Container, Card, Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'

const SetView = () => {
    const { words, sets, setAddWord } = useContext(AppContext)
    const history = useHistory()
    const {setid} = useParams<any>()
    window.localStorage.setItem('setid', setid)


    const selectedWords = words.filter((word: Word) => `${word.setid}` === `${setid}`)

    const selectedSet = (sets.filter((s: Set) => `${s.id}`=== `${ setid }`)[0] || {name: 'No set selected...'})

    const selected = (selectedSet.name !== 'No set selected...')

    return (
        <Container>
            <Card>
                <h1>Terms</h1>
                <h3>{selectedSet.name}</h3>
                {selected ? (
                    <div>
                        <div className='box'>
                            <List 
                                list={selectedWords} 
                                keys={['term', 'definition']} 
                                onAddClick={() => setAddWord(true)} 
                                callEdit={(id: number) => history.push(`/edit/terms/${id}`)}/>
                        </div>
                        <br/>
                        <Button variant='contained' color='primary' onClick={() => history.push(`/study/${setid}`)}>Study Terms</Button>
                    </div>
                ) : null}
            </Card>
        </Container>
    )
}

export default SetView