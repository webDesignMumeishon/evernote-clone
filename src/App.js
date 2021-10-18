import './App.css';
import { Navbar } from './components/layout/Navbar';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {Home} from "./components/home/Home"
import {Favorites} from "./components/notes/Favorites"
import {NoteDetail} from "./components/notes/NoteDetail"
import {EditNote} from "./components/notes/EditNote"


function App() {
  return (
    <Router>
        <Navbar></Navbar>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/detail/:id" component={NoteDetail} />
          <Route path="/edit/:id" component={EditNote} />
      </Switch>
    </Router>
  );
}

export default App;
