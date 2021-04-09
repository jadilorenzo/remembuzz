import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import List from './List'
import Search from './Search'
import {Set} from '../types'
import { Container, Card } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useUpdateId from '../useUpdateId'

const AppPage = () => {
    const { sets, selectSet, login, setAddSet, userid } = useContext(AppContext)
    const history = useHistory()

    useUpdateId()

    return (
        <Container>
            <Card>
                <h1>Sets</h1>
                <div className='container'>
                    {login ? <div className='box'>
                        <h3>Your Sets</h3>
                        <List 
                            list={sets.filter((set: Set) => set.userid === userid)} 
                            keys={['name']} 
                            onClick={selectSet} 
                            onAddClick={() => setAddSet(true)} 
                            callEdit={(id: number) => {
                                history.push(`/${id}/0/app/edit/set`)
                            }}/>
                    </div> : null}
                    <Search list={sets} keys={['name']} setItem={selectSet} />
                    <br/>
                </div>
            </Card>
        </Container>
    )
}

export default AppPage