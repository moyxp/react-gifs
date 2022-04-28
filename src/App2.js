import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';

const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=D6vIwOd23HGzSVASUsEOsk37FTAl05R3&q=panda&limit=25&offset=0&rating=g&lang=en'

const DIFFERENT_GIFS = ['https://media1.giphy.com/media/s4zZKjGhYUJsLEx9LT/giphy.gif?cid=ecf05e4769gcqt8tpxjfxwr5epy9mwnoetoqbhiwctkosysh&rid=giphy.gif&ct=g']

function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffect( () => {
    console.log('actualizando los gifs')        
    setGifs(DIFFERENT_GIFS)
  }, [])


  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => {
            <img src={singleGif}/>
          })
        }
        {/* { <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs</button>         } */}
      </section>
    </div>
  );
}

export default App;
