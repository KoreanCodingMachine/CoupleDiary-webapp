import logo from './logo.svg';
import './App.css';
import Header from './component/Header.js'
import CardComponent from './component/CardComponent.js'


function App() {
  return (
    <div className="App row">
      <Header/>
      { Array(8).fill(null).map(() => { 
          return ( 
            <CardComponent></CardComponent>
          )
        })}
    </div>
  );
}

export default App;
