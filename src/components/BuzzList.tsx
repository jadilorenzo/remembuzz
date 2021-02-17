import React, { useContext } from 'react'
import { Paper } from '@material-ui/core'
import { AppContext } from '../AppContext'
import {Word} from '../types'
import { useParams } from 'react-router-dom'

const BuzzList = () => {
    const {words, buzzWords} = useContext(AppContext)
    const { setid } = useParams<any>()
    const selectedWords = words.filter((word: Word) => `${word.setid}` === `${setid}`)

    return (
        <div>
            {selectedWords.map((word: Word) => (
                <Paper className='list-item' style={{width: 'calc(100% - 0.5rem)'}}>
                    <div>
                        <div className='list-item-primary-text'>{word.term}</div>
                        <div className='list-item-secondary-text'>{word.definition.split(' ').map(w => (
                            <span>{buzzWords.filter((b: any) => b.wordid === word.id).map((b: any) => b.word).includes(w) ? (
                                <b>{w} </b>
                            ) : (
                                <span>{w} </span>
                            )}</span>
                        ))}</div>
                    </div>
                </Paper>
            ))}
        </div>
    )
}

export default BuzzList