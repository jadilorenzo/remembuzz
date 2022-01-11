import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate, ReactEditor } from 'slate-react'
import {
    createEditor,
} from 'slate'
import { withHistory } from 'slate-history'

import * as Mui from '@mui/material'

import E from './index'

const HOTKEYS: any = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
}

const CustomEditor = () => {
    const [value, setValue] = useState<any[]>([
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ])
    const renderElement = useCallback(
        (props) => { 
            // const {attributes} = props
            // const [text, setText] = useState<string>('')

            // console.log({text, attributes})
            // let currentText: string
            // useEffect(() => {
            //     currentText = attributes.ref?.current?.innerText
            // }, [])

            // // setText((prev) => {
            // //     if (currentText != '' && !currentText) {
            // //         return currentText
            // //     }
            // //     return prev
            // // })
            const text = ''

            return <E.Element {...props} text={text} />
        }, [])
    const renderLeaf = useCallback((props) => <E.Leaf {...props} />, [])
    const editor = useMemo(
        () => withHistory(withReact(createEditor() as ReactEditor)),
        []
    )
    const [otherOptionsHover, setOtherOptionsHover] = useState(false)


    if (value.length === 0) {
        setValue([
            {
                type: 'paragraph',
                children: [{ text: '' }],
            },
        ])
    }

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={(value) => setValue(value)}
        >
            <Mui.Grid container>
                <E.HeaderSelection />

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Mui.ButtonGroup size="small">
                        <E.MarkButton format="bold" icon="format_bold" />
                        <E.MarkButton format="italic" icon="format_italic" />
                        <E.MarkButton format="underline" icon="format_underlined" />
                        <E.MarkButton format="code" icon="code" />
                    </Mui.ButtonGroup>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onMouseEnter={() => setOtherOptionsHover(true)}
                    onMouseLeave={() => setOtherOptionsHover(false)}
                >
                    <Mui.Collapse
                        orientation="horizontal"
                        in={otherOptionsHover}
                        collapsedSize={64}
                    >
                        <Mui.ButtonGroup orientation="horizontal">
                            <E.BlockButton format="" icon="..." />
                            <E.BlockButton format="block-quote" icon="format_quote" />
                            <E.BlockButton
                                format="numbered-list"
                                icon="format_list_numbered"
                            />
                            <E.BlockButton
                                format="bulleted-list"
                                icon="format_list_bulleted"
                            />
                            <E.BlockButton format="math" icon="math" />
                        </Mui.ButtonGroup>
                    </Mui.Collapse>
                </div>
            </Mui.Grid>

            <Mui.Divider />

            <div
                style={{
                    height: '25rem',
                    overflow: 'scroll',
                }}
            >
                <Mui.Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Mui.Box pt={1} pb={1}>
                        <Mui.Paper
                            square
                            variant="outlined"
                            style={{
                                width: 'calc(30rem*1.25)',
                                height: 'calc(40rem*1.25)',
                                padding: 'calc(4rem*1.25)',
                                boxShadow: ' 0.3rem 0.3rem rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Editable
                                renderElement={renderElement}
                                renderLeaf={renderLeaf}
                                spellCheck
                                autoFocus
                                onKeyDown={(event) => {
                                    for (const hotkey in HOTKEYS) {
                                        if (isHotkey(hotkey, event as any)) {
                                            event.preventDefault()
                                            const mark = HOTKEYS[hotkey]
                                            E.toggleMark(editor, mark)
                                        }
                                    }
                                }}
                            />
                        </Mui.Paper>
                    </Mui.Box>
                </Mui.Grid>
            </div>
        </Slate>
    )
}

export default CustomEditor