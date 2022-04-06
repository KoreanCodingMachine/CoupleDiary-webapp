import React from 'react';
import './CardUpdate.css';
import { Navbar, Card, Form, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './CardUpdate.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardUpdate() {
  let location = useLocation();

  console.log(location);

  let [cardTitle, setCardTitle] = useState('');
  let [cardText, setCardText] = useState('');

  useEffect(() => {
    setCardTitle(location.state.title);
    setCardText(location.state.text);
  }, []);

  const changeTitle = (e) => {
    setCardTitle(e.target.value);
  };

  const changeText = (e) => {
    setCardText(e.target.value);
  };

  const updateCard = () => {
    console.log('title ', cardTitle);

    console.log('text', cardText);
    axios
      .put(`http://127.0.0.1:8000/card/${location.state.id}/`, {
        title: cardTitle,
        text: cardText,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const deleteCard = () => {
    axios
      .delete(`http://127.0.0.1:8000/card/${location.state.id}/`)
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
              <Button onClick={updateCard} className='cardupdate-modify'>
                저장하기
              </Button>
            </Link>
            <Link to='/'>
              <Button onClick={deleteCard} className='cardupdate-delete'>
                삭제하기
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
              value={cardTitle}
            />
            <label htmlFor='floatingInputCustom'>{location.state.title}</label>
          </Form.Floating>
          <Form.Floating className='mt-3'>
            <Form.Control
              style={{ height: '700px' }}
              as='textarea'
              id='floatingPasswordCustom'
              type='text'
              placeholder='내용을 입력하세요'
              onChange={changeText}
              value={cardText}
            />
            <label htmlFor='floatingPasswordCustom'>
              {location.state.text}
            </label>
          </Form.Floating>
        </Card.Body>
      </Card>
    </Container>
  );
}
