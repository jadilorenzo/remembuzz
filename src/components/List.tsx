import React from 'react'
import { Paper, Button, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

const List = ({list, onClick, keys, onAddClick, callEdit} : {
    list: any[]
    onClick?: any
    keys: string[]
    onAddClick: any
    callEdit?: any
}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {list.map((item, index) => (
                <Paper key={index} className='list-item'>
                    <div style={{flexGrow: 1, width: '80%'}} onClick={() => onClick(item.id)}>
                        {keys[0] && <div className='list-item-primary-text'>{item[keys[0]]}</div>}
                        {keys[1] && <div className='list-item-secondary-text'>{item[keys[1]]}</div>}
                    </div>
                    <div><IconButton onClick={() => callEdit(item.id)}><EditIcon /></IconButton></div>
                </Paper>
            ))}
            <Button onClick={onAddClick} style={{ margin: '0.25rem', fontSize: '2rem'}}><div>+</div></Button>
        </div> 
    )
}

export default List