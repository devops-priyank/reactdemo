import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is github CI/CD demo for YOPLA react app.</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://eatsy.be/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eatsy
        </a>
      </header>
    </div>
  );
}

export default App;
