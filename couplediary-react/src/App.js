import './App.css';
import Header from './component/Header.js';
import CardComponent from './component/CardComponent.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './component/Footer.js';

function App() {
  const cardList = [
    {
      id: 1,
      title: 'card1',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
    {
      id: 2,
      title: 'card2',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
    {
      id: 3,
      title: 'card3',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
    {
      id: 4,
      title: 'card4',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
    {
      id: 5,
      title: 'card5',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
    {
      id: 6,
      title: 'card6',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
    {
      id: 7,
      title: 'card7',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
    {
      id: 8,
      title: 'card8',
      text: 'adfadsfae',
      image: '../image/1.png',
    },
  ];

  return (
    <div className='App row'>
      <Header />
      {cardList.map((card) => {
        return <CardComponent card={card} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
