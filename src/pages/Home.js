import React from 'react';
import CharacterList from "../components/CharacterList";



const Home = (props) => {

    return (
        <div>
            <CharacterList characterlist={props.characterlist} handleClick={props.addToList} label="Add To My List"/>
        </div>
    );
};



export default Home;

