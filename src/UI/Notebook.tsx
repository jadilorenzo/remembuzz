import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import * as Mui from '@mui/material'
import UI from '../UI'

const Notebook = (props: {id: number}) => {
    const {notebooks} = useContext(AppContext)
    const notebook = notebooks.filter((n) => n.id = props.id)[0]

    return (
        <div>
            <Mui.Container maxWidth="md">
                <Mui.Box p={3} mt={2}>
                    <Mui.Paper>
                        <Mui.AppBar
                            elevation={0}
                            position="static"
                            className="MuiPaper-rounded"
                        >
                            <Mui.Box p={3}>
                                <Mui.Typography variant="h6">{notebook.name}</Mui.Typography>
                            </Mui.Box>
                        </Mui.AppBar>
                        {/* <Mui.Grid container flexDirection="row" alignItems="center">
                            <Mui.Grid item style={{ width: '50%' }}>
                                <Mui.Box p={1}>
                                    {notebook.notes.map((n) => {
                                        return (
                                            <Mui.TextField
                                                size="small"
                                                style={n.style}
                                                value={n.data}
                                            />
                                        )
                                    })}
                                </Mui.Box>
                            </Mui.Grid>
                            <Mui.Grid item style={{ width: '50%' }}>
                                <Mui.Box p={1}>
                                    {notebook.notes.map((n) => {
                                        switch (n.type) {
                                        case 'text':
                                            return <div style={n.style}>{n.data}</div>
                                        default:
                                            return <code>Data type not found...</code>
                                        }
                                    })}
                                </Mui.Box>
                            </Mui.Grid>
                        </Mui.Grid> */}
                        <Mui.Box p={2}>
                            <UI.Editor/>
                        </Mui.Box>
                    </Mui.Paper>
                </Mui.Box>
            </Mui.Container>
        </div>
    )
}

export default Notebook