import React from 'react'
import { useSlate } from 'slate-react'

import * as Mui from '@mui/material'
import icons from '../Icon'
import E from './index'

const MarkButton = ({ format, icon }: { format: string; icon: string }) => {
    const editor = useSlate()
    return (
        <Mui.Button
            variant={E.isMarkActive(editor, format) ? 'contained' : 'text'}
            onClick={() => {
                E.toggleMark(editor, format)
            }}
        >
            {icons[icon]}
        </Mui.Button>
    )
}

export default MarkButton