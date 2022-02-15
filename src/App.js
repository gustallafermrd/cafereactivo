import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
 

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer contenido="Quieres cafe?" />
      <ItemDetail item="dato"/>
    </>
  );
}

export default App;
