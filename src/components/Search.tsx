import React, { useState } from 'react'

const Search = ({list, setItem, keys} : {
    list: any[]
    setItem: any
    keys: string[]
}) => {
    const [input, setInput] = useState('')
    return (
        <div>
            <h3>Search</h3>
            <input className='input search-input'  placeholder='Search...' onChange={e => setInput(e.target.value)}/>
            <div className="short-list">
                {list.filter(x => {
                    return (x[keys[0]]).toLowerCase().includes(input.toLowerCase())
                }).map(x => (
                    <div key={x.id} className='list-item' style={{width: 'calc(100% - 1rem)', marginBottom: '0.5rem'}} onClick={() => setItem(x.id)}>
                        <div className='list-item-primary-text'>{x[keys[0]]}</div>
                        <hr/>
                        <div className='list-item-secondary-text'>{x[keys[1]]}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search