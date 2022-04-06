import React, { Fragment } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CardComponent.css';

function CardComponent(props) {
  return (
    <>
      <Card className='real-card col-lg-4'>
        <Card.Img
          className='card-img'
          variant='top'
          src='../image/3.png'
          style={{ backgroundColor: 'white' }}
        />
        {/* src = this.props.card.image */}
        <Card.Body className='card-body' style={{ backgroundColor: 'white' }}>
          <Card.Title className='card-title'>{props.card.title}</Card.Title>
          <Card.Text className='card-text'>{props.card.text}</Card.Text>

          <Link
            to={`CardUpdate/${props.card.id}`}
            state={{
              id: props.card.id,
              title: props.card.title,
              text: props.card.text,
            }}
          >
            <Button className='modify-btn' variant='primary'>
              카드 수정 하기
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

function CardButton() {
  return (
    <Link to='CardWrite' style={{ textDecoration: 'inherit' }} className='a'>
      <AiFillEdit className='write-btn' />
    </Link>
  );
}

export { CardComponent, CardButton };
