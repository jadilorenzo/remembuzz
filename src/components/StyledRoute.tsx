import React from 'react';
import Collapse from '@material-ui/core/Collapse'
import { useHistory, Route } from 'react-router-dom';

const StyledRoute = (props: {path: string, children: any}) => {
    const history = useHistory()
    let collapseIn = history.location.pathname === props.path
    if ((history.location.pathname.includes('terms') && props.path.includes('terms'))
        || (history.location.pathname.includes('study') && props.path.includes('study'))
        || (history.location.pathname.includes('edit') && props.path.includes('edit'))) {
        collapseIn = true
    }
    return (
        <Route path={props.path}>
            <Collapse in={collapseIn} timeout={500}>
                <div className='page'>
                    {props.children}
                </div>
            </Collapse>
        </Route>
    )
}

export default StyledRoute