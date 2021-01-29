import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tab, Tabs, Hidden } from '@material-ui/core'

const SideNav = () => {
    const setid = window.localStorage.getItem('setid')
    const routes: string[] = ['home', 'sets', `terms/${setid || '0'}`, `study/${setid || '0'}`]
    const history = useHistory()
    const path = history.location.pathname.replace('/', '')
    let index = routes.indexOf(path)
    if (path === '') {
        index = 0
    } else if (path.includes('sets')) {
        index = 1
    } else if (path.includes('terms')) {
        index = 2
    } else if (path.includes('study')) {
        index = 3
    }

    const getLabel = (route: string) => {
        if (route.includes('terms')) {
            return 'terms'
        } else if (route.includes('study')) {
            return 'study'
        }
        return route
    }

    return (
        <Hidden smDown>
            <Tabs indicatorColor='primary' value={index} orientation='vertical' onChange={(event:any, newValue) => {
                history.push(routes[newValue] === 'home' ? '/' : `/${routes[newValue]}`)
            }}>
                {routes.map((route, index) => (
                    <Tab label={getLabel(route)} key={index}/>
                ))}
            </Tabs>
        </Hidden>
    )
}

export default SideNav;