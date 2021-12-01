import React from 'react'
import { useSlate } from 'slate-react'

import * as Mui from '@mui/material'
import icons from '../Icon'

import E from './index'

const BlockButton = ({ format, icon }: { format: string; icon: string }) => {
    const editor = useSlate()
    return (
        <Mui.Button
            variant={E.isBlockActive(editor, format) ? 'contained' : 'text'}
            onClick={() => {
                E.toggleBlock(editor, format)
            }}
        >
            {icons[icon]}
        </Mui.Button>
    )
}

export default BlockButton