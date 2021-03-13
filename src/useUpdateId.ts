import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { AppContext } from './AppContext'

const useUpdateId = () => {
    const params : any = useParams()
    const { setSetId, setWordId } = useContext(AppContext)

    useEffect(() => {
        setSetId(params.setid || '') 
        setWordId(params.wordid || '')
    }, [])
}

export default useUpdateId