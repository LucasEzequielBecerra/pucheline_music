import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
          <NavBar />
          <ItemListContainer greeting={'Productos'} />
          <div className='productos container'>
              <div className='productos__content'>
                  <ItemCount />
              </div>
          </div>
    </div>
  );
}

export default App;