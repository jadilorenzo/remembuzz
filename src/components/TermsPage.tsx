import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import List from './List'
import { Container, Card, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const SetView = () => {
    const {
        setAddWord,
        login,
        setWordId,
        setid,
        selectedWords,
        selectedSet,
        setSelected,
    } = useContext(AppContext)
    const history = useHistory()

    return (
        <Container>
            <Card>
                <h1>Terms</h1>
                <h3>{selectedSet.name}</h3>
                {setSelected ? (
                    <div>
                        <div className='box'>
                            <List 
                                list={selectedWords} 
                                keys={['term', 'definition']} 
                                onAddClick={() => setAddWord(true)} 
                                callEdit={login ? (id: number) => {
                                    setWordId(id)
                                    history.push(`/edit/terms/${id}`)
                                } : undefined}/>
                        </div>
                        <br/>
                        <Button variant='contained' color='primary' onClick={() => history.push(`/study/${setid}`)}>Study Terms</Button>
                    </div>
                ) : null}
            </Card>
        </Container>
    )
}

export default SetView