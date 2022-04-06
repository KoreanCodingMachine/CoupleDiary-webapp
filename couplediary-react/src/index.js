import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Logout from './component/Logout';
import SignUp from './component/SignUp';
import CardUpdate from './component/CardUpdate';
import CardWrite from './component/CardWrite';
import Option from './component/Option';
import Event from './component/Event';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cardWrite' element={<CardWrite />} />
        <Route path='/option' element={<Option />} />
        <Route path='/event' element={<Event />} />
        <Route path='/cardUpdate/:cardid' element={<CardUpdate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
