import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import './CardComponent.css';

function CardComponent(props) {
  return (
    <>
      <Card className='card' style={{ margin: '8px', width: '25rem' }}>
        <Card.Img variant='top' src='../logo192.png' />
        {/* src = this.props.card.image */}
        <Card.Body>
          <Card.Title>{props.card.title}</Card.Title>
          <Card.Text>{props.card.text}</Card.Text>

          <Link to='CardUpdate'>
            <Button variant='primary'>카드 수정 하기</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

function CardButton() {
  return <AiFillEdit className='write-btn' />;
}

export { CardComponent, CardButton };
