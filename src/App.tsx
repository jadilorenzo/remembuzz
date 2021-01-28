import './Styles.css';
import React from 'react'
import FrontPage from './components/FrontPage'
import LoginPage from './components/LoginPage'
import SetsPage from './components/SetsPage'
import AddWordPage from './components/AddWordPage'
import TermsPage from './components/TermsPage'
import { AppContext } from './AppContext';
import { useContext } from 'react';
import AddSetPage from './components/AddSetPage';
import { useHistory } from 'react-router-dom';
import StudyPage from './components/StudyPage';
import SideNav from './components/NavTabs';
import StyledRoute from './components/StyledRoute';
import Header from './components/Header';

const App = () => {
  const { showLogin, addSet, addWord, set } = useContext(AppContext)
  const history = useHistory()
  console.log(history.location.pathname)

  return (
    <div>
      <Header/>
      <div>
        <StyledRoute path="/">
            {!showLogin ? <FrontPage />
            : <LoginPage />}
        </StyledRoute>
        <StyledRoute path="/sets">
            {!addSet ? <SetsPage/> : <AddSetPage/>}
        </StyledRoute>
        <StyledRoute path="/terms/:setid">
          {!addWord ? <TermsPage /> : <AddWordPage />}
        </StyledRoute>
        <StyledRoute path="/study/:setid">
            <StudyPage/>
        </StyledRoute>
        <div style={{position: 'absolute', top: 'calc(50vh - 5rem)', display: 'flex', flexDirection: 'column'}}>
            <SideNav/>
        </div>
      </div>
    </div>
  );
}

export default App;
