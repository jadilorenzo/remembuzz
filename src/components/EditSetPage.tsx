import React, { useContext, useState } from 'react'
import { Container, Card, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../AppContext'
import {post} from '../api'
import useUpdateId from '../useUpdateId'

const EditSetPage = () => {
    const history = useHistory()
    const {selectedSet} = useContext(AppContext)

    const [setName, setSetName] = useState(selectedSet.name)

    const editSet = () => {
        post('edit/set', {
            setid: selectedSet.id,
            name: setName
        }).then(() => {
            history.push('/sets')
        }) 
    }

    useUpdateId()

    return (
        <Container>
            <Card>
                <h1>Edit Set</h1>
                <h3>{selectedSet.name}</h3>
                <TextField
                    label="Set Name"
                    value={setName}
                    onChange={(e) => setSetName(e.target.value)}
                />
                <div>
                    <Button color="primary" variant="contained" onClick={editSet}>
                        Update
                    </Button>
                </div>
            </Card>
        </Container>
    )
}

export default EditSetPage