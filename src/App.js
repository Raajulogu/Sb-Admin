import './App.css';
import Dashboard from './Components/Dashboard.js'
import { Switch,Route} from 'react-router-dom';
import Button from './Components/button.js';
import Cards from './Components/cards.js';
import Colors from './Components/colors.js';
import Borders from './Components/borders.js';
import Animations from './Components/animations.js';
import Login from './Components/login.js';
import Register from './Components/register.js';
import Forget from './Components/forget.js';
import Table from './Components/table.js';
import Chart from './Components/chart.js'
import Blank from './Components/blank';
import Error from './Components/404';
import Others from './Components/others';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Dashboard/>
        </Route>
        <Route path="/button">
          <Button/>
        </Route>
        <Route path="/cards">
          <Cards/>
        </Route>
        <Route path="/colors">
          <Colors/>
        </Route>
        <Route path="/borders">
          <Borders/>
        </Route>
        <Route path='/animations'>
          <Animations/>
        </Route>
        <Route path="/others">
          <Others/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path="/forget">
          <Forget/>
        </Route>
        <Route path="/blank">
          <Blank/>
        </Route>
        <Route path="/errors">
          <Error/>
        </Route>
        <Route path="/chart">
          <Chart/>
        </Route>
        <Route path="/table">
          <Table/>
        </Route>
      </Switch>
        
    </div>
  );
}

export default App;
