import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import { post } from '../api'
import { Button, TextField } from '@material-ui/core'

const AddSetPage = () => {
    const { setAddSet, userid} = useContext(AppContext)
    const [name, setName] = useState('')

    const addSet = () => {
        post('sets', { name, userid }).then(() => setAddSet(false))
    }

    return (
        <div>
            <h1>Add Set</h1>
            <div className="container box">
                <div className="input">
                    <div>Set Name</div>
                    <TextField onChange={(e) => setName(e.target.value)}/>
                </div>
                <div style={{marginTop: '1rem'}}>
                    <Button className='outlined' onClick={() => setAddSet(false)}>Cancel</Button>
                    {" "}
                    <Button className='filled' onClick={addSet}>Add</Button>
                </div>
            </div>
        </div>
    )
}

export default AddSetPage