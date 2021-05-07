import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import MyList from './pages/MyList';
import Footer from './components/Footer';
import Search from './components/Search';
import './App.css';

const App = (props) => {


  const [mylist, setMylist] = useState([]);
  
  const [characterlist, setCharacterlist] = useState([]);

  const [searchname, setSearchname] = useState("");

  const getCharacterlist = async () => {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${searchname}`)
    const data = await response.json()
    setCharacterlist(data)
  }

  const addToList = (character) => {
    setMylist([...mylist, character])
  }

  const removeFromList = (character) => {
    const index = mylist.findIndex((char) => character.id === char.id)
    const updatedArr = [...mylist]
    updatedArr.splice(index, 1)
    setMylist(updatedArr)
  }
  


  useEffect(() => {getCharacterlist()}, [searchname])

  return (
    <div className="App">
      <Nav />
      <Search getSearch={(searchname) => setSearchname(searchname)} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home characterlist={characterlist} addToList={addToList}/> 
          </Route>
          <Route path="/mylist">
            <MyList mylist={mylist} removeFromList={removeFromList}/>
          </Route>
        </Switch>
      <Footer />
      </main>
      
    </div>
  );
}


export default App;

