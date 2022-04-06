import { React, useState } from 'react';
import { Navbar, Container, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiFillHeart,
  AiFillSetting,
  AiFillSnippets,
} from 'react-icons/ai';
import './Header.css';

export default function Header() {
  let [button, addButton] = useState([]);
  let [bottomState, setBottomState] = useState(false);

  const add = () => {
    let newArray = [...button];
    newArray.push('');
    addButton(newArray);
  };

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
          <img className='logo-image' src='../image/2.png' />
        </div>
        {/* <Link to='/login'>로그인</Link>
        <Link to='/logout'>로그아웃</Link>
        <Link to='/signup'>회원가입</Link> */}

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
            <div style={{ marginTop: '10px' }} className='offcanvas-profile'>
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
            <hr className='offcanvas-hr'></hr>
            <Button
              onClick={add}
              className='offcanvas-btn2'
              variant='outline-success'
            >
              <AiFillSnippets className='add-icon' />
            </Button>
            <Button className='offcanvas-btn' variant='dark'>
              1월
            </Button>
            <Button className='offcanvas-btn' variant='dark'>
              2월
            </Button>
            {button.map((a, i) => {
              if (i < 10) {
                return (
                  <Button className='offcanvas-btn' variant='dark' key={i}>
                    {i + 3}월
                  </Button>
                );
              } else return null;
            })}

            <div className='offcanvas-option'>
              <AiFillSetting className='offcanvas-setting-icon' />
              <Link to='./option'>
                <span className='offcanvas-option2'>설정하기</span>
              </Link>
            </div>
            <Link to='./event'>
              <Button className='offcanvas-btn-date' variant='dark'>
                이벤트 카드 등록하기
              </Button>
            </Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
