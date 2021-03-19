import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site is currently under development.
        </p>
        <p>
        Meanwhile, checkout my &nbsp; 
        <a
          className="App-link"
          href="https://arushsharma24.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          portfolio website
        </a>
        .</p>
      </header>
    </div>
  );
}

export default App;
