import logo from './logo.svg';
import './App.css';
import Banner from './Componentes/Banner/banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Bem-vindo ao react.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
