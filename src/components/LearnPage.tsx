import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import List from './List'
import { Word, Set } from '../types'
import { Container, Card } from "@material-ui/core";

const SetView = () => {
    const { words, set, sets, setAddWord } = useContext(AppContext)

    const selectedWords = words.filter((word: Word) => word.setid === set)

    const selectedSet = (sets.filter((s: Set) => s.id === set)[0] || {name: 'No set selected...'})

    return (
        <Container>
            <Card>
                <h1>Terms</h1>
                <h3>{selectedSet.name}</h3>
                <div className='box'>
                    <List list={selectedWords} keys={['term', 'definition']} onAddClick={() => setAddWord(true)}/>
                </div>
            </Card>
        </Container>
    )
}

export default SetView