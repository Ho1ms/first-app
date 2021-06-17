import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Main} from './pages/Main'
import {Profile} from './pages/Profile'
import {Leaders} from './pages/Leaders'
import {About} from './pages/About'
import {Footer} from './components/Footer'
import Navbar from './components/Navbar'



function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Switch>
              <div className='container-xxl'>
              <Route path={'/'} exact component={Main}/>
              <Route path={'/profile'} component={Profile}/>
              <Route path={'/leaders'} component={Leaders}/>
              <Route path={'/about'} component={About}/>
              </div>
              </Switch>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
