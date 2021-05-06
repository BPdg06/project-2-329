import React from 'react';
import Character from './Character';


const CharacterList = ({characterlist, index}) => {
    return (
        <div>
            {characterlist.map((character, index) => {
                return ( 
                <div className="characterCards">
                    <h1>{character.name}</h1>
                    <Character key={character.char_id} character={character}></Character>
                    {/* <img src={character.img}></img> */}
                </div>
            )})}
        </div>
    );
};


export default CharacterList;

