import {h} from 'hyperapp';
import logo from './logo.svg';
import './App.css';

const App = (state, actions) => {
    return (
      <div class="App">
        <header class="App-header">
          <img src={logo} class="App-logo" alt="logo" />
          <h1 class="App-title">{state.message}</h1>
        </header>
        <p class="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }


export default App;
