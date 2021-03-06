import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import { post } from '../api'
import { Button, Container, Card, TextField } from '@material-ui/core'

const AddSetPage = () => {
    const { setAddWord, setid } = useContext(AppContext)
    const [term, setTerm] = useState('')
    const [definition, setDefinition] = useState('')

    const addSet = () => {
        post('words', { term, definition, setid }).then(() => setAddWord(false))
    }

    return (
        <div>
            <h1>Add Term</h1>
            <Container>
                <Card>
                    <div>
                        <div>Term</div>
                        <TextField placeholder='Term' variant='outlined' value={term} onChange={(e) => setTerm(e.target.value)} />
                    </div>
                    <br/>
                    <div>
                        <div>Definition</div>
                        <TextField placeholder='Definition' multiline variant='outlined' value={definition} onChange={(e) => setDefinition(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Button variant='outlined' onClick={() => setAddWord(false)}>Cancel</Button>
                        {' '}
                        <Button variant='contained' color='primary' onClick={addSet}>Add</Button>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default AddSetPage