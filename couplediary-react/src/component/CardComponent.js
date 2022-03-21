import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardComponent.css';

export default class CardComponent extends React.Component {
  render() {
    return (
      <>
        <Card className='card' style={{ margin: '8px', width: '25rem' }}>
          <Card.Img variant='top' src='../logo192.png' />
          {/* src = this.props.card.image */}
          <Card.Body>
            <Card.Title>{this.props.card.title}</Card.Title>
            <Card.Text>{this.props.card.text}</Card.Text>

            <Link to='CardUpdate'>
              <Button variant='primary'>카드 수정 하기</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export class CardButton extends React.Component {
  render() {
    return <div className='write-btn'></div>;
  }
}
