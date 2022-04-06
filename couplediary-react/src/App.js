/*eslint-disable*/
// 'http://127.0.0.1:8000/card/'
import './App.css';
import Header from './component/Header.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './component/Footer.js';
import { CardComponent, CardButton } from './component/CardComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [cardList, setCardList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/card/').then((res) => {
      console.log(res);
      setCardList(res.data);
    });
  }, []);

  return (
    <div className='App row'>
      <Header></Header>
      {cardList.map((card) => {
        return <CardComponent className='card' card={card} />;
      })}
      <CardButton />
      <Footer />
    </div>
  );
}

export default App;
