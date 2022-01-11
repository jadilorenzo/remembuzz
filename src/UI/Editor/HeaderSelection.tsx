import React from 'react'
import E from './index'
import * as Mui from '@mui/material'
import { useSlate } from 'slate-react'

const HeaderSelection = () => {
    const [header, setHeader] = React.useState<number>(0)
    const editor = useSlate()
        
    return (
        <div>
            <Mui.FormControl fullWidth variant="filled">
                <Mui.InputLabel id="select-label">Header</Mui.InputLabel>
                <Mui.Select
                    labelId="select-label"
                    label="Header"
                    value={header}
                    onChange={(e) => {
                        const newVal = Number(e.target.value)
                        E.toggleBlock(editor, `heading-${newVal}`)
                        setHeader(newVal)
                    }}
                >
                    {[0, 1, 2, 3, 4, 5, 6].map((x: number) => (
                        <Mui.MenuItem style={{clipPath: 'none !important'}} value={x}>
                            {x !== 0 ? `H${x}` : 'No Header'}
                        </Mui.MenuItem>
                    ))}
                </Mui.Select>
            </Mui.FormControl>
            {/* <Mui.Selectz
                value={header}
                onChange={(e) => {
                    setHeader((val) => {
                        console.log(val)
                        if (e.target.value === val) {
                            return ''
                        } else {
                            return e.target.value
                        }
                    })
                }}
            >
                <Mui.MenuItem
                    value={'H1'}
                    onClick={() => E.toggleBlock(editor, 'heading-one')}
                    color={
                        E.isBlockActive(editor, 'heading-one') ? 'primary' : 'inherit'
                    }
                >
                    {icons['looks_one']}
                </Mui.MenuItem>
                <Mui.MenuItem
                    value={'H2'}
                    onClick={() => E.toggleBlock(editor, 'heading-two')}
                    color={
                        E.isBlockActive(editor, 'heading-two') ? 'primary' : 'inherit'
                    }
                >
                    {icons['looks_two']}
                </Mui.MenuItem>
                <Mui.MenuItem
                    value={'H3'}
                    onClick={() => E.toggleBlock(editor, 'heading-three')}
                    color={
                        E.isBlockActive(editor, 'heading-three') ? 'primary' : 'inherit'
                    }
                >
                    {icons['looks_three']}
                </Mui.MenuItem>
                <Mui.MenuItem
                    value={'H4'}
                    onClick={() => E.toggleBlock(editor, 'heading-four')}
                    color={
                        E.isBlockActive(editor, 'heading-four') ? 'primary' : 'inherit'
                    }
                >
                    {icons['looks_four']}
                </Mui.MenuItem>
                <Mui.MenuItem
                    value={'H5'}
                    onClick={() => E.toggleBlock(editor, 'heading-five')}
                    color={
                        E.isBlockActive(editor, 'heading-five') ? 'primary' : 'inherit'
                    }
                >
                    {icons['looks_five']}
                </Mui.MenuItem>
                <Mui.MenuItem
                    value={'H6'}
                    onClick={() => E.toggleBlock(editor, 'heading-six')}
                    color={
                        E.isBlockActive(editor, 'heading-six') ? 'primary' : 'inherit'
                    }
                >
                    {icons['looks_six']}
                </Mui.MenuItem>
            </Mui.Select> */}
        </div>
    )
}

export default HeaderSelection