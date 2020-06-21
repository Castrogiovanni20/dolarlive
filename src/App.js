import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './components/Card'
import CardRiesgoPais from './components/CardRiesgoPais';


function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <h1>DolarLive</h1>
          <p>Cotizacion del dolar en tiempo real</p>
          <br/>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card nombre="Dolar Oficial" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card nombre="Dolar Blue" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card nombre="Contado con liqui" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card nombre="Dolar Promedio" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card nombre="Dolar Bolsa" />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <CardRiesgoPais nombre="Riesgo Pais" />
        </Grid>
        
        <Grid item xs={12} sm={12}>
          <p className="footer"> Powered by 👨‍💻 Ramiro Castrogiovanni </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
