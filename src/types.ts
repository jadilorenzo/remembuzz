interface UserPreferences {
    color?: string
}

export interface User {
    name: string
    id: number
    preferences: UserPreferences | {}
}

export interface Note {
    type: string // 'math' | 'text' | 'img'
    data: string
    style: any
}

export interface Notebook { 
    notes: Note[] 
    id: number
    name: string
    userid: number
}