import React from 'react';
import { Navbar, Container, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiFillHeart, AiFillSetting } from 'react-icons/ai';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar sticky='top' bg='light' expand={false}>
        <Container fluid className='header-container'>
          <Navbar.Toggle>
            <AiOutlineMenu className='header-menu-icon' />
          </Navbar.Toggle>

          <div className='header-center-box'>
            <img className='profile-image' src='../image/1.jpg' alt='' />
            <AiFillHeart className='header-center-icon' />
            <img className='profile-image' src='../image/1.jpg' alt='' />
          </div>

          <div className='navbar-btn'>
            <Link to='/login'>로그인</Link>
            <Link to='/logout'>로그아웃</Link>
            <Link to='/signup'>회원가입</Link>
          </div>

          <Navbar.Offcanvas
            className='navbar-offcanvas-main'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='start'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='offcanvas-body'>
              <div className='offcanvas-profile'>
                <div className='offcanvas-center-box'>
                  <img className='profile-image' src='../image/1.jpg' alt='' />
                  <AiFillHeart className='header-center-icon' />
                  <img className='profile-image' src='../image/1.jpg' alt='' />
                </div>
                <div className='offcanvas-name'>
                  <span className='offcanvas-name1'>김주형</span>
                  <span className='offcanvas-name2'>김수진</span>
                </div>
                <div className='offcanvas-met-date'>138</div>
                <div className='offcanvas-date'>2021.10.20</div>
              </div>
              <div className='empty'></div>
              <hr></hr>
              <Button className='offcanvas-btn' variant='outline-success'>
                1월
              </Button>
              <Button className='offcanvas-btn' variant='outline-success'>
                2월
              </Button>
              <Button className='offcanvas-btn' variant='outline-success'>
                +
              </Button>
              <div className='offcanvas-option'>
                <AiFillSetting className='offcanvas-setting-icon' />
                <span className='offcanvas-option2'>설정하기</span>
              </div>
              <Button className='offcanvas-btn-date' variant='outline-success'>
                ^
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}
