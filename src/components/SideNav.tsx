import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core'

const SideNav = () => {
    const routes : string[] = ['home', 'sets', 'terms', 'study']
    const history = useHistory()

    return (
        <>
            <Tabs orientation='vertical' onChange={(event:any, newValue) => {
                history.replace(routes[newValue] === 'home' ? '/' : `/${routes[newValue]}`)
            }}>
                {routes.map((route, index) => (
                    <Tab value={index} label={route}/>
                ))}
            </Tabs>
        </>
    )
}

// ${history.location.pathname === (route === 'home' ? '/' : `/${route}`) ? 'left-button-selected' : ''

export default SideNav;