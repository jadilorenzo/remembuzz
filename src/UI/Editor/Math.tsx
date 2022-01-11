import React from 'react'
import 'katex/dist/katex.min.css'
const { BlockMath } = require('react-katex')

const Math = (props: any) => {
    console.log(props)
    return <BlockMath>{props.children}</BlockMath>
}

export default Math