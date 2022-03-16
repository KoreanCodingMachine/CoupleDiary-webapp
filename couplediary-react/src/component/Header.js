import React from 'react';
import './Header.css';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar class='Navbar' bg='light' expand='lg'>
        <Container>
          <Navbar.Brand className='top_navbar__brand' id='navbar-brand'>
            CoupleDiary
          </Navbar.Brand>
          <Link to='/login'>로그인</Link>
          <Link to='/logout'>로그아웃</Link>
          <Link to='/signup'>회원가입</Link>
        </Container>
      </Navbar>
    );
  }
}
