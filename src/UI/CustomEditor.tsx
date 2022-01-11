import React, { useEffect, useRef, useState } from 'react'
import MUIRichTextEditor, { TMUIRichTextEditorRef } from 'mui-rte'
import { Calculate } from '@mui/icons-material'
import * as Mui from '@mui/material'
const { InlineMath, BlockMath } = require('react-katex')

const Math = (props: any) => {
    return (
        <>
            {props.blockProps.isBlock ? (
                <BlockMath>{props.blockProps.children}</BlockMath>
            ) : (
                <InlineMath>{props.blockProps.children}</InlineMath>
            )}
        </>
    )
}

const MathPopover = (props: any) => {
    const [state, setState] = useState({
        anchor: null,
        isCancelled: false,
    })
    const [value, setValue] = useState('')
    const [isBlock, setIsBlock] = useState(false)

    useEffect(() => {
        setState({
            anchor: props.anchor,
            isCancelled: false,
        })
    }, [props.anchor])

    return (
        <Mui.Popover anchorEl={state.anchor} open={state.anchor !== null}>
            {/* <Mui.Box p={2} onClick={() => props.onSubmit({children: 'Hi!'}, true)}>Hello</Mui.Box> */}
            <Mui.Box p={3}>
                <Mui.TextField
                    value={value}
                    label="Math"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Insert Math"
                />

                <Mui.Box p={1}>
                    <Mui.FormControlLabel
                        control={
                            <Mui.Switch
                                checked={isBlock}
                                onChange={(event) => setIsBlock(event.target.checked)}
                            />
                        }
                        label="Block"
                        labelPlacement="end"
                    />
                </Mui.Box>

                <Mui.Box p={1}>
                    {isBlock ? (
                        <BlockMath>{value === '' ? '...' : value}</BlockMath>
                    ) : (
                        <InlineMath>{value === '' ? '...' : value}</InlineMath>
                    )}
                </Mui.Box>

                <Mui.Button
                    component="div"
                    onClick={() => props.onSubmit({}, false)}
                >
                    Cancel
                </Mui.Button>
                {' '}
                <Mui.Button
                    variant="contained"
                    component="div"
                    onClick={() => props.onSubmit({ children: value, isBlock }, true)}
                >
                    Add
                </Mui.Button>
            </Mui.Box>
        </Mui.Popover>
    )
}

const CustomEditor = () => {
    const [data, setData] = useState('')

    const ref = useRef<TMUIRichTextEditorRef>(null)
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)

    
    useEffect(() => {
        const prevData = window.localStorage.getItem('notebook-data')
        if (data === '') setData(prevData || '')
        window.localStorage.setItem('notebook-data', data)
    }, [data])

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            ref.current?.save()
        })
    }, [])

    return (
        <div>
            <MathPopover
                anchor={anchor}
                onSubmit={(d: any, insert: boolean) => {
                    if (insert) {
                        ref.current?.insertAtomicBlockSync('math', d)
                    }
                    setAnchor(null)
                }}
            />
            <MUIRichTextEditor
                label="Start typing..."
                defaultValue={data}
                onSave={(d) => {
                    console.log(d !== data)
                    if (d !== data) setData(d)
                }}
                controls={[
                    'bold',
                    'underline',
                    'italic',
                    'code',
                    'link',
                    'media',
                    'numberList',
                    'bulletList',
                    'quote',
                    'insert-math',
                    'save',
                ]}
                customControls={[
                    {
                        name: 'math',
                        type: 'atomic',
                        atomicComponent: Math,
                    },
                    {
                        name: 'insert-math',
                        icon: <Calculate />,
                        type: 'callback',
                        onClick: (_editorState, _name, anchor) => {
                            setAnchor(anchor)
                        },
                    },
                ]}
                ref={ref}
            />
            <br />
        </div>
    )
}

export default CustomEditor