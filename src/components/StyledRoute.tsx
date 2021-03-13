import React from 'react'
import Collapse from '@material-ui/core/Collapse'
import { Route } from 'react-router-dom'

const StyledRoute = (props: any) => {

    return (
        <Route exact={props.exact} path={props.path}>
            <Collapse in={true} timeout={500}>
                <div className='page'>
                    {props.children}
                </div>
            </Collapse>
        </Route>
    )
}

export default StyledRoute