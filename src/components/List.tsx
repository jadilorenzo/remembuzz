import React from 'react'

const List = ({list, onClick, keys, onAddClick} : {
    list: any[]
    onClick?: any
    keys: string[]
    onAddClick: any
}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {list.map((item, index) => (
                <div key={index} onClick={() => onClick(item.id)} className='list-item'>
                    <div className='list-item-primary-text'>{item[keys[0]]}</div>
                    <hr/>
                    {keys[1] && <div className='list-item-secondary-text'>{item[keys[1]]}</div>}
                </div>
            ))}
            <div onClick={onAddClick} className='list-add-item'><div>+</div></div>
        </div> 
    )
}

export default List