import './App.css';
import Header from './component/Header.js'
import CardComponent from './component/CardComponent.js'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Footer from './component/Footer.js'

function App() {
  return (
    <div className="App row">
     <Header></Header> 
      { Array(8).fill(null).map(() => { 
          return ( 
            <CardComponent></CardComponent>
          )
        })}
       <Footer></Footer>
    </div>
  );
}

export default App;
