import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer contenido="Quieres cafe?" />
    </>
  );
}

export default App;
