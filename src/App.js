import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ButtonA from './components/ButtonA';
import ButtonB from './components/ButtonB';


function App() {
  const [isButtonA, setIsButtonA] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { isButtonA 
          ? (<ButtonA
              onHide={() => setIsButtonA(false)}
            >
            </ButtonA>) 
          : (<ButtonB
              onHide={() => setIsButtonA(true)}
            ></ButtonB>)
        }        
      </header>
    </div>
  );
}

export default App;
