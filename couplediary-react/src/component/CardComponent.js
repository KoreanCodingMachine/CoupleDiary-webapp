import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import './CardComponent.css';

function CardComponent(props) {
  return (
    <>
      <Card className='card col-lg-3'>
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
  return (
    <Link to='CardWrite' style={{ textDecoration: 'inherit' }} className='a'>
      <AiFillEdit className='write-btn' />;
    </Link>
  );
}

export { CardComponent, CardButton };
