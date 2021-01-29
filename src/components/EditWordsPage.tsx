import React, { useContext, useState } from 'react';
import { Container, Card, TextField, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { Word } from '../types'
import { post } from '../api'
import {uniq} from 'lodash'

const WordButton = (props: {children: string, handleClick: any, in: boolean}) => {
    const [selected, setSelected] = useState(props.in)
    return <span onClick={() => {
        setSelected(s => !s)
        props.handleClick(props.children)
    }}>{selected ? <b style={{ color: '#43a047' }}>{props.children}</b> : <span>{props.children}</span>}{' '}</span>
}

const EditWordPage = () => {
    const history = useHistory()
    const {wordid} = useParams<any>()
    const { words, buzzWords } = useContext(AppContext)
    const setid = window.localStorage.getItem('setid')
    const word = (words.filter((word: Word) => `${word.id}` === `${wordid}`)[0] || { term: "No word selected", definition: '' })

    const [newTerm, setNewTerm] = useState(word.term)
    const [newBuzzWords, setBuzzWords] = useState<string[]>(buzzWords.map(word => word.word))

    console.log(newBuzzWords)

    const editWord = () => {
        post(`edit/word`, {
            wordid: word.id,
            term: newTerm
        }).then(() => {
            post('buzz_words', {
                wordid: word.id,
                words: newBuzzWords
            }).then(() => {
                history.push(`/terms/${setid}`)
            })
        })
    }

    const handleClick = (buzzWord: string) => {
        setBuzzWords((w: string[]) => {
            if (w.includes(buzzWord)) {
                const newWords = w.filter(w => w !== buzzWord)
                return newWords
            } else {
                return uniq([...w, buzzWord])                
            }
        })
    }



    return (
        <Container>
            <Card>
                <h1>Edit word</h1>
                <h3>{word.term}</h3>
                <TextField label='Term' value={newTerm} onChange={(e) => setNewTerm(e.target.value)}/>
                <Card>
                    <h3>Buzzwords</h3>
                    {word.definition.split(' ').map((x: string) => <WordButton in={newBuzzWords.includes(x)} handleClick={handleClick}>{x}</WordButton>)}
                </Card>
                <br/>
                <div>
                    <Button color='primary' variant='contained' onClick={editWord}>Update</Button>
                </div>
            </Card>
        </Container>
    )
}

export default EditWordPage