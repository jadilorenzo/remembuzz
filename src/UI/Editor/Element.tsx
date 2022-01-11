import React from 'react'
import * as Mui from '@mui/material'
import Math from './Math'

const Element = ({ attributes, children, element, text }: any) => {

    switch (element.type) {
    case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
    case 'heading-1':
        return <Mui.Typography variant="h1">{children}</Mui.Typography>
    case 'heading-2':
        return <Mui.Typography variant="h2">{children}</Mui.Typography>
    case 'heading-3':
        return <Mui.Typography variant="h3">{children}</Mui.Typography>
    case 'heading-4':
        return <Mui.Typography variant="h4">{children}</Mui.Typography>
    case 'heading-5':
        return <Mui.Typography variant="h5">{children}</Mui.Typography>
    case 'heading-6':
        return <Mui.Typography variant="h6">{children}</Mui.Typography>
    case 'list-item':
        return <li {...attributes}>{children}</li>
    case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
    case 'math': 
        return <Math math={text} {...attributes} />
    default:
        return <Mui.Typography {...attributes}>{children}</Mui.Typography>
    }
}

export default Element