import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import { post } from '../api'
import { Button, TextField, Container, Card } from '@material-ui/core'

const AddSetPage = () => {
    const { setAddSet, userid} = useContext(AppContext)
    const [name, setName] = useState('')

    const addSet = () => {
        post('sets', { name, userid }).then(() => setAddSet(false))
    }

    return (
        <div>
            <h1>Add Set</h1>
            <Container>
                <Card>
                    <div className="input">
                        <div>Set Name</div>
                        <TextField onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                        <Button className='outlined' onClick={() => setAddSet(false)}>Cancel</Button>
                        {' '}
                        <Button className='filled' onClick={addSet}>Add</Button>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default AddSetPage