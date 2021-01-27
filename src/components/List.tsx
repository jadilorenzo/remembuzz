import React from 'react'
import { Paper, Button } from '@material-ui/core'

const List = ({list, onClick, keys, onAddClick} : {
    list: any[]
    onClick?: any
    keys: string[]
    onAddClick: any
}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {list.map((item, index) => (
                <Paper key={index} onClick={() => onClick(item.id)} className='list-item'>
                    <div className='list-item-primary-text'>{item[keys[0]]}</div>
                    <hr/>
                    {keys[1] && <div className='list-item-secondary-text'>{item[keys[1]]}</div>}
                </Paper>
            ))}
            <Button onClick={onAddClick}style={{ margin: '0.25rem', fontSize: '2rem'}}><div>+</div></Button>
        </div> 
    )
}

export default List