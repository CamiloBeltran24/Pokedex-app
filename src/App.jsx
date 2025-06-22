import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader/Loader'
import Pokedex from './components/Pokedex/Pokedex'
import Searcher from './components/Searcher/Searcher'
import ListContainer from './components/ListContainer/ListContainer'


function App() {
  return (
    <>
      <Pokedex>
        <Searcher></Searcher>
      </Pokedex>
    </>
  )
}

export default App
