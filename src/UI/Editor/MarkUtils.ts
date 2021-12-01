import {
    Editor, 
    BaseEditor,
} from 'slate'

export const toggleMark = (editor: BaseEditor, format: string) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

export const isMarkActive = (editor: BaseEditor, format: string) => {
    const marks = Editor.marks(editor)
    return marks ? (marks as any)[format] === true : false
}
