import React from 'react';
import './Option.css';
import { ListGroup, Badge, Container } from 'react-bootstrap';

export default function Option() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <ListGroup as='ol' numbered>
        <ListGroup.Item as='li'>바닥 부터 시작</ListGroup.Item>
        <ListGroup.Item as='li'>연월일로 표시</ListGroup.Item>
        <ListGroup.Item as='li'>평가해 주십시오.</ListGroup.Item>
        <ListGroup.Item as='li'>공유하기</ListGroup.Item>
        <ListGroup.Item as='li'>피드백</ListGroup.Item>
        <ListGroup.Item as='li'>정보</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
