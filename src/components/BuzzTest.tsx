import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core'
import NoTest from './NoTest.svg'

const BuzzTest = () => {
    const theme = useTheme()
    return (
        <div>
            <Typography variant="h4">
                <span style={{ color: theme.palette.primary.main }}>Buzz</span>Test
            </Typography>
            <br/>
            <img style={{ width: '10%' }} src={NoTest} alt="" />
            <div><Typography variant="overline">No set selecetd</Typography></div>
        </div>
    )
}

export default BuzzTest