import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Photo from './components/Feed/Photo/Photo';
import Footer from './components/Footer';
import Header from './components/Header'
import ProtectRoute from './components/Helpers/ProtectRoute';
import Home from './components/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound';
import User from './components/User/User';
import UserProfile from './components/User/UserProfile';
import {UserStorage} from './UserContext'

function App() {
  return (
    <React.Fragment>
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <ProtectRoute path="conta/*" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </React.Fragment>
  );
}

export default App;
