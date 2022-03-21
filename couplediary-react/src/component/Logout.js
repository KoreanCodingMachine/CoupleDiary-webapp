import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';
export default class LogOut extends React.Component {
  render() {
    return (
      <Container className='login-container'>
        <Form>
          <Form.Group className='login-id mb-3' controlId='loginGroupId'>
            <Form.Label>아이디</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
          <Form.Group className='login-pw mb-3' controlId='loginGroupPassword'>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
        </Form>
        <Link to='/'>
          <Button className='login-btn mt-5'>로그인</Button>
        </Link>

        <div className='login-state'>
          <Form.Group
            className='login__state mb-3'
            controlId='loginGroupCheckbox'
          >
            <Form.Check
              className='login__state-checkbox'
              type='checkbox'
              label='로그인 상태유지'
            />
          </Form.Group>

          <div className='find'>
            <Link to='/'>
              <p className='find-id'>아이디</p>
            </Link>
            <p>/</p>
            <Link to='/'>
              <p className='find-pw'>비밀번호 찾기</p>
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}
