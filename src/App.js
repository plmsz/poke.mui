import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import './App.css';
import NavBar from './components/NavBar';
import SearchItem from './components/SearchItem';
import CustomCard from './components/CustomCard';
import AlertPokemon from './components/Alert';
import SpinnerProgress from './components/SpinnerProgress';

function App() {
  const [cacheSearch, setCacheSearch, removeSearch] = useLocalStorage('pokemonSearch', []);
  const [pokemon, setPokemon] = useState({});
  const [searchPokemon, setSearchPokemon] = useState('');
  const [erro, setErro] = useState(false);
  const [spinner, setSpinner] = useState(false);  

  useEffect(() => {
    handleRequestToAPI();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErro(false)
    }, 4000);
    
    return ()=> {
      clearTimeout(timeout)
    }
  }, [erro]);

  useEffect(()=>{
      saveInCache()
  },[pokemon]);

  function checkInCache(){
    return cacheSearch.find(item => item.name == searchPokemon)
  }
  function saveInCache(){
      setCacheSearch([...cacheSearch, pokemon])
  }

  async function handleFindPokemon(){
    const result = checkInCache();
    if (result){
      return setPokemon(result)
    }

    setSpinner(true);
    await handleRequestToAPI()
    
  }

  async function handleRequestToAPI() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon || 'pikachu'}`);
      const {
        abilities,
        name,
        sprites: { other },
      } = await response.json();
      const {
        dream_world: { front_default },
      } = other;

      const currentPokemon = {
        name,
        abilities,
        image: front_default,
      };
      setPokemon(currentPokemon);
      setSpinner(false);

    } catch (error) {
      console.log(error)
      setErro(true);
      setSpinner(false);
      setSearchPokemon("")
    }
    
  }
  

  return (
    <div className="app">
      <NavBar />
      <div className="container-card">
        {erro && <AlertPokemon/>}
        {/* quando não tem um pokemon default, para uppercasa funcionar */}
        {spinner && <SpinnerProgress/>}
        {pokemon.hasOwnProperty('name') && ( 
          <CustomCard
            image={pokemon.image}
            name={pokemon.name.toUpperCase().slice(0, 1) + pokemon.name.slice(1)}
            abilities={pokemon.abilities}
          />
         )} 

      <SearchItem searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} handleFindPokemon={handleFindPokemon} pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default App;
