import React from 'react';
import { Navbar, Card, Form, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './CardWrite.css';

export default function CardWrite() {
  let [cardTitle, setCardTitle] = useState('');
  let [cardText, setCardText] = useState('');

  const changeTitle = (e) => {
    setCardTitle(e.target.value);
  };

  const changeText = (e) => {
    setCardText(e.target.value);
  };

  const createCard = () => {
    axios
      .post('http://127.0.0.1:8000/card/', { title: cardTitle, text: cardText })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand href='#home'>
            <img className='logo' src='../image/2.png'></img>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Link to='/'>
              <Button onClick={createCard} className='cardupdate-btn'>
                저장하기
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='empty'></div>
      <Card
        className='cardupdate-card'
        style={{ width: '100%', height: '74em' }}
      >
        <Card.Img
          className='cardupdate-img'
          style={{ width: '30%', height: '30%' }}
          variant='top'
          src='../image/3.png'
        />
        <Card.Body>
          <Form.Floating className='mt-3'>
            <Form.Control
              id='floatingInputCustom'
              type='text'
              placeholder='제목을 입력하세요'
              onChange={changeTitle}
            />
            <label htmlFor='floatingInputCustom'>제목을 입력하세요</label>
          </Form.Floating>
          <Form.Floating className='mt-3'>
            <Form.Control
              style={{ height: '700px' }}
              as='textarea'
              id='floatingPasswordCustom'
              type='text'
              placeholder='내용을 입력하세요'
              onChange={changeText}
            />
            <label htmlFor='floatingPasswordCustom'>내용을 입력하세요</label>
          </Form.Floating>
        </Card.Body>
      </Card>
    </Container>
  );
}
