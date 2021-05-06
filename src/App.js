import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import MyList from './pages/MyList';
import './App.css';

const App = (props) => {


  const [mylist, setMylist] = useState([]);
  //useState hook for the characters
  const [characterlist, setCharacterlist] = useState([]);

  const getCharacterlist = async () => {
    const response = await fetch("https://www.breakingbadapi.com/api/characters")
    const data = await response.json()
    setCharacterlist(data)
  }

  const addToTeam = (character) => {
    setMylist([...mylist, character])
  } 


  useEffect(() => {getCharacterlist()}, [])

  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/">
            <Home characterlist={characterlist} addToTeam={addToTeam}/> 
          </Route>
          <Route path="/mylist">
            <MyList/>
          </Route>
        </Switch>
      </main>
      
    </div>
  );
}


export default App;

