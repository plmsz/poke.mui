// import { useState } from 'react';
import useStyles from './styles';
import { TextField, Button } from '@material-ui/core/';

function SearchItem({ handleFindPokemon, searchPokemon, setSearchPokemon, handleRequestToAPI }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
      />
      <Button className={classes.button} variant="contained" color="secondary" onClick={handleFindPokemon} >
        Buscar
      </Button>
    </div>
  );
}

export default SearchItem;
