import '../styles/App.scss';
import data from '../services/api';
import { useState} from 'react';


function App() {

const [friendsPhrase, setFriendsPhrase] = useState(data);
const [newPhrase, setNewPhrase] = useState("");
const [newCharacter, setNewCharacter] = useState("");

const saveNewPhrase = (ev) => {
  setNewPhrase(ev.target.value);
}

const saveNewCharacter = (ev) => {
  setNewCharacter(ev.target.value);
}

const addNewPhraseandCharacter = (ev) => {
  ev.preventDefault();
  const newList = {quote: newPhrase, character: newCharacter};
  setFriendsPhrase([...friendsPhrase, newList])
  setNewCharacter("");
  setNewPhrase("");
}

const renderPhrases = () => {
  return friendsPhrase.map((phrase, index
    ) => {
    return <li key={index}>{phrase.quote} - {phrase.character}</li>
  })
}

  return (
    <div className="App">
      <h1>Frases de Friends</h1>
      <ul>{renderPhrases()}</ul>
      <h3>Añadir una nueva frase</h3>
      <form>
      <label>
    Frase:
    <input type="text" 
    name="name"
    value={newPhrase} 
    onChange={saveNewPhrase}/>
  </label>
  <label>
    Personaje:
    <input type="text" 
    name="name" 
    value={newCharacter}
    onChange={saveNewCharacter}/>
  </label>
      </form>
      <button 
      onClick={addNewPhraseandCharacter}>Añadir una nueva frase</button>
    </div>

  );
}

export default App;
