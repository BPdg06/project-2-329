import React from 'react';
import CharacterList from "../components/CharacterList";



const Home = (props) => {

    return (
        <div>
            <CharacterList characterlist={props.characterlist} handleClick={props.addToTeam} label="Add To Team"/>
        </div>
    );
};



export default Home;

