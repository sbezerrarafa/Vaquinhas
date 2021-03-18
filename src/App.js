import './styles/global.css';
import Menu from './menu/Menu';
import Header from './header/Header';
import Sobre from './sobre/Sobre';
import Contato from './contato/Contato';
import Muural from './muural/Muural';

function App() {
  return (
    <div>
      <Menu />

      <Header />
      <Sobre />
      <Muural />
      <Contato />
    </div>
  );
}

export default App;
