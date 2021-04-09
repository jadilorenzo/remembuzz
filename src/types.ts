export interface User {
    id: string
    name: string
}

export interface Set {
    id: string
    userid: string
    name: string
}

export interface Word {
    id: string
    term: string
    definition: string
    setid: string
}

export interface BuzzWord {
  id: string;
  word: string;
  wordid: string;
}
