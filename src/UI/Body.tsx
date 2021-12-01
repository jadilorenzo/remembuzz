import React from 'react'
import * as Mui from '@mui/material'

const Body = (props: {children: any}) => {
    return (
        <Mui.Container maxWidth="md">
            <Mui.Box p={3} mt={2}>
                <Mui.Paper>
                    <Mui.Box p={4}>{props.children}</Mui.Box>
                </Mui.Paper>
            </Mui.Box>
        </Mui.Container>
    )
}

export default Body