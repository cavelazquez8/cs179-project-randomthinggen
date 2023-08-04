import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
function App() {
  const [description, setDescription] = useState("");
  const [selection, setSelection] = useState("PERSON");

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  }

  const generateDescription = async () => {
  let randomText;
  
  switch (selection) {
    case 'PERSON':
      randomText = 'https://randomuser.me/api/?inc=name'; 
      break;
    default:
      randomText = '';
  }
  try {
    const response = await axios.get(randomText);
    if (selection === 'PERSON') {
    const person = response.data.results[0];
    const fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;
    setDescription(fullName);
    } 
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
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
