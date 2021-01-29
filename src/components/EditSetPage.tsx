import React, { useContext, useState } from 'react';
import { Container, Card, TextField, Button } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../AppContext';
import {Set} from '../types'
import {post} from '../api'

const EditSetPage = () => {
    const history = useHistory()
    const {setid} = useParams<any>()
    const {sets} = useContext(AppContext)
    console.log(sets, setid)
    const set = (sets.filter((set: Set) => `${set.id}` === `${setid}`)[0] || {name: "No set selected"})

    const [setName, setSetName] = useState(set.name)

    const editSet = () => {
        post(`edit/set`, {
            setid: set.id,
            name: setName
        }).then(() => {
            history.push('/sets')
        }) 
    }

    return (
        <Container>
            <Card>
                <h1>Edit Set</h1>
                <h3>{set.name}</h3>
                <TextField label='Set Name' value={setName} onChange={(e) => setSetName(e.target.value)}/>
                <div>
                    <Button color='primary' variant='contained' onClick={editSet}>Update</Button>
                </div>
            </Card>
        </Container>
    )
}

export default EditSetPage