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
    const renderElement = useCallback((props) => <E.Element {...props} />, [])
    const renderLeaf = useCallback((props) => <E.Leaf {...props} />, [])
    const editor = useMemo(
        () => withHistory(withReact(createEditor() as ReactEditor)),
        []
    )
    return (
        <Slate
            editor={editor}
            value={value}
            onChange={(value) => setValue(value)}
        >
            <Mui.Grid>
                <E.MarkButton format="bold" icon="format_bold" />
                <E.MarkButton format="italic" icon="format_italic" />
                <E.MarkButton format="underline" icon="format_underlined" />
                <E.MarkButton format="code" icon="code" />
          
                <E.BlockButton format="heading-one" icon="looks_one" />
                <E.BlockButton format="heading-two" icon="looks_two" />
                <E.BlockButton format="heading-three" icon="looks_three" />
                <E.BlockButton format="heading-four" icon="looks_four" />
                <E.BlockButton format="heading-five" icon="looks_five" />
                <E.BlockButton format="heading-six" icon="looks_six" />

                <E.BlockButton format="block-quote" icon="format_quote" />
                <E.BlockButton format="numbered-list" icon="format_list_numbered" />
                <E.BlockButton format="bulleted-list" icon="format_list_bulleted" />
            </Mui.Grid>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some rich text…"
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
        </Slate>
    )
}

export default CustomEditor