import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '&': {
      marginBottom: theme.spacing(3),
      align: 'center'
    },
  },
}));

function AlertPokemon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Alert severity="error">
        <AlertTitle>Erro</AlertTitle>
        Pokemon não encontrado — <strong> verifique se digitou o nome do Pokemon corretamente!</strong>
      </Alert> 
    </div>
  );
}

export default AlertPokemon