import './Styles.css';
import React from 'react'
import FrontPage from './components/FrontPage'
import LoginPage from './components/LoginPage'
import SetsPage from './components/SetsPage'
import AddWordPage from './components/AddWordPage'
import LearnPage from './components/LearnPage'
import { AppContext } from './AppContext';
import { useContext } from 'react';
import AddSetPage from './components/AddSetPage';
import { useHistory } from 'react-router-dom';
import StudyPage from './components/StudyPage';
import SideNav from './components/SideNav';
import Route from './components/Route';
import Header from './components/Header';

const App = () => {
  const { showLogin, addSet, addWord } = useContext(AppContext)
  const history = useHistory()
  console.log(history.location.pathname)

  return (
    <div>
      <Header/>
      <div>
        <Route path="/">
            {!showLogin ? <FrontPage />
            : <LoginPage />}
        </Route>
        <Route path="/sets">
            {!addSet ? <SetsPage/> : <AddSetPage/>}
        </Route>
        <Route path="/terms">
            {!addWord ? <LearnPage/> : <AddWordPage/>}
        </Route>
        <Route path="/study">
            <StudyPage/>
        </Route>
        <div style={{position: 'absolute', top: 'calc(50vh - 5rem)', display: 'flex', flexDirection: 'column'}}>
            <SideNav/>
        </div>
      </div>
    </div>
  );
}

export default App;
