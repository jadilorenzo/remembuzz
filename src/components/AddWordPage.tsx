import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import { post } from '../api'

const AddSetPage = () => {
    const { setAddWord, set } = useContext(AppContext)
    const [term, setTerm] = useState('')
    const [definition, setDefinition] = useState('')

    const addSet = () => {
        const setid = set
        post('words', { term, definition, setid }).then(() => setAddWord(false))
    }

    return (
        <div>
            <h1>Add Term</h1>
            <div className="container box">
                <div className="input">
                    <div>Term</div>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
                <br/>
                <div className="input">
                    <div>Definition</div>
                    <textarea value={definition} onChange={(e) => setDefinition(e.target.value)} />
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <button className='outlined' onClick={() => setAddWord(false)}>Cancel</button>
                    <button className='filled' onClick={addSet}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddSetPage