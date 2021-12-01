import { 
    EditorState, 
    // AtomicBlockUtils,
} from 'draft-js'

export const insertTeXBlock = (editorState: any) => {
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
        'TOKEN',
        'IMMUTABLE',
        {content: 'ax^2+bx+c'},
    )
    // const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(
        editorState,
        {currentContent: contentStateWithEntity},
    )
    // return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, tex)
    return newEditorState
}