import '../styles/App.scss';
import data from '../services/api';
import { useState, useEffect } from 'react';


function App() {

const [friendsPhrase, setFriendsPhrase] = useState([]);

useEffect(() => {
  setFriendsPhrase(data)
});

const renderPhrases = () => {
  return data.map((phrase, index
    ) => {
    return <li key={index}>{phrase.quote} - {phrase.character}</li>
  })
}

  return (
    <div className="App">
      <h1>Frases de Friends</h1>
      <ul>{renderPhrases()}</ul>
    </div>
  );
}

export default App;
