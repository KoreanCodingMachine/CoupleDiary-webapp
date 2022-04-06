import React from 'react';
import './Event.css';
import { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';

export default function Event() {
  let [header, setHeader] = useState(['빼빼로데이', '화이트데이', '블랙데이']);
  let [title, setTitle] = useState([
    '초콜릿은 맛있다.',
    '사탕은 먹을만함',
    '짜장면은 과학이다',
  ]);
  let [text, setText] = useState([
    '초콜릿 먹으러 가자',
    '사탕 먹으러 가자',
    '짱깨 조지러 가자',
  ]);

  return (
    <Container>
      {header.map((a, i) => {
        return (
          <>
            <Card>
              <Card.Header as='h5'>{a}</Card.Header>
              <Card.Body>
                <Card.Title>{title[i]}</Card.Title>
                <Card.Text>{text[i]}</Card.Text>
              </Card.Body>
            </Card>
            <div className='empty' style={{ marginTop: '20px' }}></div>
          </>
        );
      })}
    </Container>
  );
}
