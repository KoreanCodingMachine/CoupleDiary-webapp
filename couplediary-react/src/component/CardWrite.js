import React from 'react';
import './CardUpdate.css';
import { Navbar, Card, Form, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardUpdate.css';

export default class CardUpdate extends React.Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Container>
            <Navbar.Brand href='#home'>로고</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
              <Link to='/'>
                <Button className='cardupdate-modify'>저장하기</Button>
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
            src='./logo512.png'
          />
          <Card.Body>
            <Form.Floating className='mt-3'>
              <Form.Control
                id='floatingInputCustom'
                type='text'
                placeholder='제목을 입력하세요'
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
              />
              <label htmlFor='floatingPasswordCustom'>내용을 입력하세요</label>
            </Form.Floating>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
