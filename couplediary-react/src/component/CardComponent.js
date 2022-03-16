import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CardComponent extends React.Component {
  render() {
    return (
      <Card style={{ margin: '8px', width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>{this.props.card.title}</Card.Title>
          <Card.Text>{this.props.card.text}</Card.Text>
          <Link to='CardUpdate'>
            <Button variant='primary'>카드 수정하기</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
