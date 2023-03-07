import { useState } from 'react';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import Player from './Player';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [link, setLink] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    setLink('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLink(input);
    setInput('');
  }

  return (
    <div className="App">
      {!link.length && (
        <form onSubmit={handleSubmit}>
          <label for="input-link">Insert the link</label>
          <div>
            <input type="text" name="link" id="input-link" placeholder="https://" defaultValue={input} onChange={handleChange} maxlength="240" autoFocus />
            <button type="submit"><img src={ArrowRight} alt="img" /></button>
          </div>
        </form>
      )}
      {Boolean(link.length) && (
        <div id="player">
          <button type="button" onClick={handleClick}><img src={ArrowLeft} alt="img" />Back</button>
          <Player src={link} />
        </div>
      )}
    </div>
  );
}

export default App;
