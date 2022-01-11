import React from 'react'
import { useSlate } from 'slate-react'

import * as Mui from '@mui/material'
import icons from '../Icon'
import E from './index'

const MarkButton = ({ format, icon }: { format: string; icon: string }) => {
    const editor = useSlate()
    return (
        <Mui.IconButton
            color={E.isMarkActive(editor, format) ? 'primary' : 'inherit'}
            onClick={() => {
                E.toggleMark(editor, format)
            }}
        >
            {icons[icon]}
        </Mui.IconButton>
    )
}

export default MarkButton