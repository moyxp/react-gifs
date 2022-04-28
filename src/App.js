import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content" >
        <h1>App</h1>
        {/* <a href='/gif/panda'>Gifs de pandas</a> */}
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/halo'>Gifs de halo</Link>
        <Link to='/gif/mw'>Gifs de CoD</Link>
        <Route component= {ListOfGifs} path="/gif/:keyword" ></Route>
        {/* <ListOfGifs keyword='panda' />         */}
      </section>
    </div>
  );
}


export default App;
