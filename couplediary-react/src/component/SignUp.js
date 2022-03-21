import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Row, Button, Col, FormLabel } from 'react-bootstrap';
import './SignUp.css';

export default class SignUp extends React.Component {
  render() {
    return (
      <Container className='signup-container'>
        <Form>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='signupGridlast-name'>
              <Form.Label>성</Form.Label>
              <Form.Control type='text' placeholder='성' />
            </Form.Group>

            <Form.Group as={Col} controlId='signupGridfirst-name'>
              <Form.Label>이름</Form.Label>
              <Form.Control type='text' placeholder='이름' />
            </Form.Group>
          </Row>

          <Form.Group
            className='signup-password mb-3'
            as={Col}
            controlId='signupGridPassword'
          >
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type='password' placeholder='비밀번호' />
          </Form.Group>

          <Form.Group
            className='signup-re-password mb-3'
            as={Col}
            controlId='signupGridPassword'
          >
            <Form.Label>비밀번호 재입력</Form.Label>
            <Form.Control type='password' placeholder='비밀번호 재입력' />
          </Form.Group>

          <Row className='mb-3'>
            <FormLabel>사귄일수</FormLabel>
            <Form.Group as={Col} controlId='signupGridYear'>
              <Form.Control placeholder='0000년' />
            </Form.Group>
            <Form.Group as={Col} controlId='signupGridMonth'>
              <Form.Control placeholder='00월' />
            </Form.Group>
            <Form.Group as={Col} controlId='signupGridDate'>
              <Form.Control placeholder='00일' />
            </Form.Group>
          </Row>
          <div className='signup-radio mb-3'>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className='mb-3'>
                <Form.Check
                  inline
                  label='남자'
                  name='group1'
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label='여자'
                  name='group1'
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>
          <Link to='/'>
            <Button className='signup-btn mb-3'>회원가입</Button>
          </Link>
        </Form>
      </Container>
    );
  }
}
