import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Sarch from './components/Sarch'
import {Grid} from '@mui/material';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container sx={{ pt: 2 }}>
        <Grid sm={2} />
        <Grid xs={12} sm={8}>
          <Sarch />
          <Card />
        </Grid>
        <Grid sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
