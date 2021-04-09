import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Tab, Tabs, Hidden } from '@material-ui/core'
import { AppContext } from '../AppContext'

const SideNav = () => {
    const {setid, wordid} = useContext(AppContext)
    const routes: string[] = ['home', 'sets', 'terms', 'study']
    const history = useHistory()
    let path = history.location.pathname.replace('/', '')

    for (const route of routes) {
        if (history.location.pathname.includes(route === 'home' ? '/' : route)) {
            path = route
        }
    }
    const index = routes.indexOf(path)

    return (
        <Hidden smDown>
            <Tabs indicatorColor='primary' value={index} orientation='vertical' onChange={(event:any, newValue) => {
                history.push(routes[newValue] === 'home' ? '/' : `/${setid}/${wordid}/app/${routes[newValue]}`)
            }}>
                {routes.map((route, index) => (
                    <Tab label={route} key={index}/>
                ))}
            </Tabs>
        </Hidden>
    )
}

export default SideNav