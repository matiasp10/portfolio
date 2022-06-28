import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Proyectos from './components/proyectos/Proyectos';
import Tech from './components/tech/Tech';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Tech></Tech>
      <Proyectos></Proyectos>
    </div>
  );
}

export default App;
