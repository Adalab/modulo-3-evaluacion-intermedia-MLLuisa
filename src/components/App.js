import '../styles/App.scss';
import data from '../services/api';
import {useState} from 'react';


function App() {

const [friendsPhrase, setFriendsPhrase] = useState(data);
const [newPhrase, setNewPhrase] = useState("");
const [newCharacter, setNewCharacter] = useState("");
const [searchPhrase, setSearchPhrase] = useState("");
const [searchCharacter, setSearchCharacter] = useState("");

const saveNewPhrase = (ev) => {
  setNewPhrase(ev.target.value);
}

const saveNewCharacter = (ev) => {
  setNewCharacter(ev.target.value);
}

const searchForPhrase = (ev) => {
    setSearchPhrase(ev.target.value)
}

const searchForCharacter = (ev) => {
  setSearchCharacter(ev.target.value);
}

const addNewPhraseandCharacter = (ev) => {
  ev.preventDefault();
  const newList = {quote: newPhrase, character: newCharacter};
  setFriendsPhrase([...friendsPhrase, newList])
  setNewCharacter("");
  setNewPhrase("");
}

const renderPhrases = () => {
  return friendsPhrase
  .filter((eachPhrase) => {
    return eachPhrase.quote.toLowerCase().includes(searchPhrase.toLocaleLowerCase());
  })
  .filter((eachCharacter) => {
    return eachCharacter.character.toLocaleLowerCase().includes(searchCharacter.toLocaleLowerCase());
  })
  .map((phrase, index
    ) => {
    return <li key={index}>{phrase.quote} - {phrase.character}</li>
  })
}

  return (
    <div className="App">
      <form className=''>
        <label>Filtrar por frase: 
          <input type="text" 
                name="name"
                value={searchPhrase}
                onChange={searchForPhrase}/>
        </label>
      </form>
      <form>
        <label>Filtrar por personaje:

        </label>
          <select type="text" 
                  name="name"
                  value={searchCharacter}
                  onChange={searchForCharacter}>
                  <option value="">Todos</option>
                  <option value="Ross">Ross</option>
                  <option value="Monica">Monica</option>
                  <option value="Joey">Joey</option>
                  <option value="Phoebe">Phoebe</option>
                  <option value="Chandler">Chandler</option>
                  <option value="Rachel">Rachel</option>
          </select>
      </form>
  
    
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
