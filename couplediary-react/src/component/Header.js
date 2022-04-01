import { React, useState } from 'react';
import { Navbar, Container, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiFillHeart, AiFillSetting } from 'react-icons/ai';
import './Header.css';

function Header() {
  let [버튼, 버튼추가] = useState(['1월', '2월']);
  let [입력값, 입력값변경] = useState(['']);
  let [바텀바, 바텀바변경] = useState(false);
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

            {바텀바 === true ? (
              <div className='bottom-box'>
                <BottomEvent 입력값={입력값} 버튼={버튼} 바텀바={바텀바} />
              </div>
            ) : (
              <BottomEvent 입력값={입력값} 버튼={버튼} 바텀바={바텀바} />
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

function BottomEvent(props) {
  return (
    <>
      <hr className='offcanvas-hr'></hr>
      {props.버튼.map((a, i) => {
        if (i < 12) {
          return (
            <Button className='offcanvas-btn' variant='outline-success' key={i}>
              {i + 1}월
            </Button>
          );
        } else return null;
      })}

      <Button
        onClick={() => {
          let newArray = [...props.props.버튼];
          newArray.unshift('');
          props.버튼추가(newArray);
        }}
        className='offcanvas-btn'
        variant='outline-success'
      >
        +
      </Button>

      <div className='offcanvas-option'>
        <AiFillSetting className='offcanvas-setting-icon' />
        <span className='offcanvas-option2'>설정하기</span>
      </div>

      <Button
        onClick={() => {
          props.props.바텀바변경(false);
        }}
        className='offcanvas-btn-date'
        variant='outline-success'
      >
        ^
      </Button>
    </>
  );
}

export { Header, BottomEvent };
