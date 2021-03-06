import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import { useTheme, Card } from '@material-ui/core'
import NoTest from './NoTest.svg'
import { AppContext } from '../AppContext'

const BuzzTest = () => {
    const theme = useTheme()
    const {setid} = useContext(AppContext)
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
                <Card>test</Card>
            )}
        </div>
    )
}

export default BuzzTest