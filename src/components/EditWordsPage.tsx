import React, { useContext, useState, useEffect } from 'react'
import { Container, Card, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../AppContext'
import { post } from '../api'
import {uniq} from 'lodash'
import useUpdateId from '../useUpdateId'

const WordButton = (props: {children: string, handleClick: any, in: boolean}) => {
    const [selected, setSelected] = useState(props.in)
    return <span onClick={() => {
        setSelected(s => !s)
        props.handleClick(props.children)
    }}>{selected ? <b style={{ color: '#43a047' }}>{props.children}</b> : <span>{props.children}</span>}{' '}</span>
}

const EditWordPage = () => {
    const history = useHistory()
    const { selectedWord, buzzWords, setid, wordid} = useContext(AppContext)

    const [newTerm, setNewTerm] = useState(selectedWord.term)
    const [newBuzzWords, setBuzzWords] = useState<string[]>(buzzWords.map((word: any) => word.word))

    const editWord = () => {
        post('edit/word', {
            wordid: selectedWord.id,
            term: newTerm
        }).then(() => {
            post('buzz_words', {
                wordid: selectedWord.id,
                words: newBuzzWords,
            }).then(() => {
                history.push(`/${setid}/${wordid}/app/terms`)
            })
        })
    }

    useEffect(() => {
        return () => {
            setBuzzWords([])
        }
    }, [])

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

    useUpdateId()

    return (
        <Container>
            <Card>
                <h1>Edit word</h1>
                <h3>{selectedWord.term}</h3>
                <TextField
                    label="Term"
                    value={newTerm}
                    onChange={(e) => setNewTerm(e.target.value)}
                />
                <Card>
                    <h3>Buzzwords</h3>
                    {selectedWord.definition.split(' ').map((x: string) => (
                        <WordButton
                            in={newBuzzWords.includes(x)}
                            handleClick={handleClick}
                        >
                            {x}
                        </WordButton>
                    ))}
                </Card>
                <br />
                <div>
                    <Button color="primary" variant="contained" onClick={editWord}>
                        Update
                    </Button>
                </div>
            </Card>
        </Container>
    )
}

export default EditWordPage