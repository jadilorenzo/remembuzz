import React from 'react';
import Collapse from '@material-ui/core/Collapse'
import { useHistory } from 'react-router-dom';

const Route = (props: {path: string, children: any}) => {
    const history = useHistory()
    return (
        <Collapse in={history.location.pathname === props.path} timeout={750}>
            <div className='page'>
                {props.children}
            </div>
        </Collapse>
    )
}

export default Route