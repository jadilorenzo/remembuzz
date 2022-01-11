import React, { useContext } from 'react'
import * as Mui from '@mui/material'
import AddIcon from '@mui/icons-material/AddRounded'
import AccountIcon from '@mui/icons-material/AccountCircle'
import { AppContext } from '../AppContext'

const Header = () => {
    const {currentUser, users} = useContext(AppContext)

    const user = users.filter(u => u.id === currentUser)[0]

    return (
        <>
            <Mui.AppBar
                elevation={0}
                style={{
                    clipPath: `
                        polygon(
                            0% 0%, 
                            0% 100%, 
                            1rem calc(100% - 1rem), 
                            100% calc(100% - 1rem), 
                            100% 100%, 
                            100% 0
                        )`,
                    height: '5rem',
                }}
            >
                <Mui.Grid container spacing={2} alignItems="center">
                    <Mui.Grid item>
                        <Mui.Box p={2}>
                            <Mui.Typography variant="h5">Math Notebook</Mui.Typography>
                        </Mui.Box>
                    </Mui.Grid>
                    <div style={{ flexGrow: 1 }} />
                    <Mui.Grid item>
                        <Mui.Box p={1} pr={1.5}>
                            <Mui.Tooltip title={`Username: ${user.name}`}>
                                <Mui.IconButton color="inherit">
                                    <AccountIcon />
                                </Mui.IconButton>
                            </Mui.Tooltip>
                            <Mui.Tooltip title="New Notebook">
                                <Mui.IconButton color="inherit">
                                    <AddIcon />
                                </Mui.IconButton>
                            </Mui.Tooltip>
                        </Mui.Box>
                    </Mui.Grid>
                </Mui.Grid>
            </Mui.AppBar>
            <Mui.Box p={3} />
        </>
    )
}

export default Header