import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core'

const BuzzTest = () => {
    const theme = useTheme()
    return (
        <div>
            <Typography variant='h4'><span style={{color: theme.palette.primary.main}}>Buzz</span>Test</Typography>
        </div>
    )
}

export default BuzzTest