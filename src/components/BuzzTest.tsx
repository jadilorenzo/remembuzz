import React, { useContext } from 'react'
import Reward from 'react-rewards'
import { useTheme, Paper, TextField, Button, Typography } from '@material-ui/core'
import NoTest from './NoTest.svg'
import { AppContext } from '../AppContext'
import useUpdateId from '../useUpdateId'
const Test = () => {
    const {
        selectedWord,
        checkAnswer,
        answer,
        setAnswer,
        correct,
        setCorrect,
        problemNumber,
        buzzWords,
        nextQuestion,
    } = useContext(AppContext)


    return (
        <div>
            <div>
                <Typography variant="h6">
                    {problemNumber + 1}: {selectedWord.term}
                </Typography>
                <TextField
                    disabled={correct}
                    multiline
                    variant='outlined'
                    placeholder="Answer"
                    rows='2'
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </div>

            {correct !== undefined && (
                <div style={{ margin: '0.5rem' }}>
                    {correct ? (
                        <Typography color="primary" variant="h6">
                Correct!
                        </Typography>
                    ) : (
                        <Typography color="primary" variant="h6">
                Incorrect
                        </Typography>
                    )}
                    {selectedWord.definition.split(' ').map((w: string) => (
                        <span>
                            {buzzWords
                                .filter((b: any) => b.wordid === selectedWord.id)
                                .map((b: any) => b.word)
                                .includes(w) ? (
                                    <Typography component="span" color="primary">
                                        <b>{w} </b>
                                    </Typography>
                                ) : (
                                    <span>{w} </span>
                                )}
                        </span>
                    ))}
                    <br />
                </div>
            )}

            <Reward
                ref={(ref: any) => {
                    if (ref) {
                        if (correct) {
                            ref.rewardMe()
                        } else if (correct === false) {
                            ref.punishMe()
                        }
                    }
                }}
                type="confetti"
                config={{ colors: ['green', 'white', 'lime', 'lightgreen'] }}
            >
                {correct === undefined ? (
                    <Button
                        onClick={() => setCorrect(checkAnswer())}
                        component="div"
                        color="primary"
                    >
              Check
                    </Button>
                ) : (
                    <Button
                        onClick={() => {
                            setCorrect(undefined)
                            nextQuestion()
                        }}
                        color="primary"
                        variant="contained"
                    >
              Next
                    </Button>
                )}
            </Reward>
        </div>
    )
}

const BuzzTest = () => {
    const theme = useTheme()
    const {setid} = useContext(AppContext)
    
    useUpdateId()

    return (
        <div>
            <Typography variant="h4">
                <span style={{ color: theme.palette.primary.main }}>Buzz</span>Test
            </Typography>
            <br/>
            {(setid === undefined) ? (
                <>
                    <img style={{ width: '10%' }} src={NoTest} alt="" />
                    <div><Typography variant="overline">No set selecetd</Typography></div>
                </>
            ) : (
                <Paper style={{padding: '1rem'}}><Test/></Paper>
            )}
        </div>
    )
}

export default BuzzTest