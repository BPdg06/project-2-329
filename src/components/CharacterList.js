import React from 'react';
import Character from './Character';


const CharacterList = ({characterlist, index, handleClick, label}) => {
    return (
        <div className="characterCards">
            
            {characterlist.map((character, index) => {
                return (
                <div key={character.char_id}>
                    {/* <h1>{character.name}</h1> */}
                    <Character character={character} handleClick={handleClick} label={label}></Character>
                    

                    {/* <img src={character.img}></img> */}
                </div>
            )})}
        </div>
    );
};


export default CharacterList;

