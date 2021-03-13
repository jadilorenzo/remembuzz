import './Styles.css'
import React from 'react'
import SetsPage from './components/SetsPage'
import AddWordPage from './components/AddWordPage'
import TermsPage from './components/TermsPage'
import { AppContext } from './AppContext'
import { useContext } from 'react'
import AddSetPage from './components/AddSetPage'
import { useHistory } from 'react-router-dom'
import StudyPage from './components/StudyPage'
import SideNav from './components/NavTabs'
import StyledRoute from './components/StyledRoute'
import EditSetPage from './components/EditSetPage'
import EditWordPage from './components/EditWordsPage'
import Loader from './components/Loader'

const App = () => {
    const { addSet, addWord, loading } = useContext(AppContext)
    const history = useHistory()
    console.log(history.location.pathname)

    return (
        <div>
            {loading ? <Loader/> :<div>
                <StyledRoute exact path="/:setid/:wordid/app/sets">
                    {!addSet ? <SetsPage/> : <AddSetPage/>}
                </StyledRoute>
                <StyledRoute exact path="/:setid/:wordid/app/edit/set">
                    <EditSetPage/>
                </StyledRoute>
                <StyledRoute exact path="/:setid/:wordid/app/terms">
                    {!addWord ? <TermsPage /> : <AddWordPage />}
                </StyledRoute>
                <StyledRoute exact path="/:setid/:wordid/app/edit/term">
                    <EditWordPage/>
                </StyledRoute>
                <StyledRoute exact path="/:setid/:wordid/app/study">
                    <StudyPage/>
                </StyledRoute>
                <div style={{position: 'absolute', top: 'calc(50vh - 5rem)', display: 'flex', flexDirection: 'column'}}>
                    <SideNav/>
                </div>
            </div>}
        </div>
    )
}

export default App
