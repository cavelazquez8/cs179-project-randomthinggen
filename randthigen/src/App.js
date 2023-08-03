import './App.css';
import React, {useState} from 'react';
function App() {
  const [description, setDescription] = useState("");
  const [selection, setSelection] = useState("PERSON");

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  }

  const generateDescription = () => {
  let randomText;
  
  switch (selection) {
    case 'PERSON':
      randomText = 'Carlos'; 
      break;
    case 'PLACE':
      randomText = 'UCR'; 
      break;
    case 'THING':
      randomText = 'Computer';
      break;
    default:
      randomText = '';
  }
    setDescription(randomText);
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
          name="selector"
          value="PERSON" 
          checked={selection === "PERSON"}
          onChange={handleSelectionChange} />
          PERSON
          <input 
          type="radio" 
          name="selector"
          value="PLACE"
          checked={selection === "PLACE"}
          onChange={handleSelectionChange}/>
          PLACE
          <input 
          type="radio" 
          name="selector"
          value="THING"
          checked={selection === "THING"}
          onChange={handleSelectionChange}/>
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
