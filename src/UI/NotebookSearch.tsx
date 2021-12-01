import React, { useContext } from 'react'
import * as Mui from '@mui/material'
import {Notebook} from '../types'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Context from '../Context'
import { Link } from 'react-router-dom'
// import { useTheme } from '@mui/material'

const NotebookSearch = () => {
    // const theme = useTheme()
    const { currentNotebooks, setSearch, search } = useContext(
        Context.NotebookSearchContext
    )


    return (
        <>
            <Mui.Typography variant="h6">Your Notebooks</Mui.Typography>
            <Mui.Divider />

            <Mui.Box p={1}>
                <Mui.Box mt={1} mb={1}>
                    <Mui.TextField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        variant="standard"
                        fullWidth
                        placeholder="Search Notebooks..."
                        InputProps={{
                            endAdornment: (
                                <Mui.InputAdornment position="end">
                                    <Mui.IconButton size="small">
                                        <ArrowForwardRoundedIcon />
                                    </Mui.IconButton>
                                </Mui.InputAdornment>
                            ),
                        }}
                    />
                </Mui.Box>
                {currentNotebooks.map((n: Notebook) => (
                    <div key={n.id}>
                        <Link to={`/notebooks/${n.id}`} style={{color: 'black', textDecoration: 'none'}}>
                            <Mui.Button color='inherit' variant='contained' style={{ width: '100%'}}>
                                <Mui.Box p={2}>{n.name}</Mui.Box>
                            </Mui.Button>
                        </Link>
                    </div>
                ))}
            </Mui.Box>
        </>
    )
}

export default NotebookSearch