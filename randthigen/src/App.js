import './App.css';
import React, {useState} from 'react';
function App() {
  const [description, setDescription] = useState("");

  const generateDescription = () => {
    const randText = Math.random().toString(36).substring(7);
    setDescription(randText);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          RandomThingGen
        </div>
        <div className="selectors">
          <input 
          type="radio" 
          name="selector"/>
          PERSON
          <input 
          type="radio" 
          name="selector"/>
          PLACE
          <input 
          type="radio" 
          name="selector"/>
          THING
        </div>
        <button onClick = {generateDescription} >Generate</button>
      </header>
      <body>
        <div className='descBox'>
        {description}
        </div>
      </body>
    </div>
  );
}

export default App;
