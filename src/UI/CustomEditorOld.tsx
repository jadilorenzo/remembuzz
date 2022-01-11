import React, { useRef, useEffect, useState } from 'react'

// interface TextSection {
//     type: 'paragraph' | 'bold'
//     text: string
// }

const CustomEditor = () => {
    const [currentText, setCurrentText] = useState('')
    const inputEl : any = useRef(null)

    useEffect(() => {
        console.log('useEffect', currentText)
    })

    useEffect(() => {
        inputEl.current.focus()
        window.getSelection()?.addRange(document.createRange())
    })
    
    const handleKeyDown = (e: any) => {
        e.preventDefault()
        if (e.key === 'Backspace') {
            setCurrentText(t => t.slice(0, t.length-1))
        } else {
            setCurrentText((t) => t + e.key)
        }
        console.log(e.getModifierState())
    }

    return (
        <>
            
            <div
                contentEditable
                suppressContentEditableWarning
                onKeyDown={handleKeyDown}
                ref={inputEl}
            >
                <b>{currentText}</b>  
            </div>
        </>
    )
}

export default CustomEditor