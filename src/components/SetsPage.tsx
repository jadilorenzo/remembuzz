import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import List from './List'
import Search from './Search'
import {Set} from '../types'
import { Container, Card } from '@material-ui/core'

const AppPage = () => {
    const { sets, selectSet, login, setAddSet, userid } = useContext(AppContext)

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
                        />
                    </div> : null}
                    <div className="box">
                        <Search list={sets} keys={['name']} setItem={selectSet}/>
                    </div>
                    <br/>
                </div>
            </Card>
        </Container>
    )
}

export default AppPage