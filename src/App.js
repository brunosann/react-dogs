import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home';
import Login from './components/Login/Login';
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
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </React.Fragment>
  );
}

export default App;
