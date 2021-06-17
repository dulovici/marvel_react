import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Single } from './Single/Single';


function App() {

  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/single/:id' component={Single} />
        {/* <Redirect from='/' to='/main' /> */}
      </Switch>
    </>
  );
}

export default App;
