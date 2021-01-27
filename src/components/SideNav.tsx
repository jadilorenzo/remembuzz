import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tab, Tabs, Hidden } from '@material-ui/core'

const SideNav = () => {
    const routes : string[] = ['home', 'sets', 'terms', 'study']
    const history = useHistory()
    const path = history.location.pathname.replace('/', '')
    let index = routes.indexOf(path)
    if (path === '') {
        index = 0
    }

    return (
        <Hidden smDown>
            <Tabs indicatorColor='primary' value={index} orientation='vertical' onChange={(event:any, newValue) => {
                history.replace(routes[newValue] === 'home' ? '/' : `/${routes[newValue]}`)
            }}>
                {routes.map((route) => (
                    <Tab label={route}/>
                ))}
            </Tabs>
        </Hidden>
    )
}

// ${history.location.pathname === (route === 'home' ? '/' : `/${route}`) ? 'left-button-selected' : ''

export default SideNav;