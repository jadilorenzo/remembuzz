import {
    Editor,
    Transforms,
    Element as SlateElement,
    BaseEditor,
} from 'slate'

const LIST_TYPES = ['numbered-list', 'bulleted-list', 'math']

export const isBlockActive = (editor: BaseEditor, format: any) => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) =>
            !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      (n as any).type === format,
    })

    return !!match
}

export const toggleBlock = (editor: Editor, format: any) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: (n) =>
            !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes((n as any).type),
        split: true,
    })
    const newProperties: any = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
    Transforms.setNodes<SlateElement>(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}
