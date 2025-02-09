import '../styles/App.scss';
import {useEffect, useState} from 'react';
import callToApi from '../services/api';


function App() {

const [newPhrase, setNewPhrase] = useState("");
const [newCharacter, setNewCharacter] = useState("");
const [searchPhrase, setSearchPhrase] = useState("");
const [searchCharacter, setSearchCharacter] = useState("");
const [dataApi, setDataApi] = useState([]);

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

useEffect(() => {
  callToApi().then((response) => {
    setDataApi(response);
  });
}, []);

const addNewPhraseandCharacter = (ev) => {
  ev.preventDefault();
  if(newPhrase === "" || newCharacter === "") {
    alert('Tienes que rellenar ambos campos, de "Frase" y de "Personaje!!"');
    return false
  } else {
    const newList = {quote: newPhrase, character: newCharacter};
  setDataApi([...dataApi, newList])
  setNewCharacter("");
  setNewPhrase("");
  }
}


const renderPhrases = () => {
  return dataApi
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
      <header>
        <h1 className='title'>Frases de Friends</h1>
      </header>
      
      <form className=''>
        <label htmlFor='text'>Filtrar por frase: 
          <input type="text" 
                name="name"
                id='text'
                value={searchPhrase}
                onChange={searchForPhrase}/>
        </label>
      </form>
      <form>
        <label htmlFor='text'>Filtrar por personaje:

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
  
      <ul>{renderPhrases()}</ul>
      <h3>Añadir una nueva frase</h3>
      <form>
        <label htmlFor='text'>
          Frase:
          <input type="text" 
                  name="name"
                  id='text'
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
