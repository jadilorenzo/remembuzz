import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import { post } from '../api'

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
                    <input onChange={(e) => setName(e.target.value)}/>
                </div>
                <div style={{marginTop: '1rem'}}>
                    <button className='outlined' onClick={() => setAddSet(false)}>Cancel</button>
                    <button className='filled' onClick={addSet}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddSetPage