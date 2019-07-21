import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import LoginPage from './components/Login/Login.jsx';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer />} />
          <Route path='/dialogs'
                 render={() => <DialogsContainer />} />
          <Route path = '/users'
                 render={() => <UsersContainer />} />
          <Route path = '/login'
                 render={() => <LoginPage />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
