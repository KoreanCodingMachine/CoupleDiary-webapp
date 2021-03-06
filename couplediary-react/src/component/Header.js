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
  let [monthList, setMonthList] = useState(['1', '2', '3']);
  const [inputFlag, setInputFlag] = useState(false);
  const [inputvalue, setInputValue] = useState('');
  // const add = () => {
  //   let newArray = [...button];
  //   newArray.push('');
  //   addButton(newArray);
  // };

  const setMonth = () => {
    if (monthList.includes(inputvalue)) {
      alert('이미 리스트에 있습니다.');
      return;
    }
    const num = Number(inputvalue);
    if (Number.isNaN(num)) {
      alert('올바른 형식을 입력해 주세요');
      return;
    }
    setMonthList((prevstate) => [...prevstate, inputvalue]);
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

        <div className='to'>
          <Link className='tologin' to='/login'>
            로그인
          </Link>
          <Link className='tologout' to='/logout'>
            로그아웃
          </Link>
          <Link className='tosignup' to='/signup'>
            회원가입
          </Link>
        </div>

        <div className='navbar-btn'>
          <Link to='/'>
            <img className='logo-image' src='../image/2.png' />
          </Link>
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
              className='offcanvas-btn2'
              variant='outline-success'
              onClick={() => {
                setInputFlag(true);
              }}
            >
              <AiFillSnippets className='add-icon' />
            </Button>

            {monthList.map((month) => {
              return (
                <Button className='offcanvas-btn' variang='outline-success'>
                  {month}
                </Button>
              );
            })}

            {inputFlag ? (
              <div style={{ display: 'flex' }}>
                <input
                  className='input'
                  type='text'
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button className='button' type='button' onClick={setMonth}>
                  저장
                </button>
                <button
                  className='buttonx'
                  type='button'
                  onClick={() => {
                    setInputFlag(false);
                  }}
                >
                  x
                </button>
              </div>
            ) : null}

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
