import React from 'react';


const Character = ({character}) => {
    // console.log(character)
    
    // const loaded = () => {
        
    // }
    return (
        <div className='eachCard'>
            <div className='cardContent'>
                <div className='cardImage'>
                    <img src={character.img} alt='Character'/>
                </div>
                <div className='cardInfo'>
                    <h1>{character.name}</h1>
                    <ul>
                        <li>Actor Name: {character.portrayed}</li>
                        <li>Nickname: {character.nickname}</li>
                        <li>Birthday: {character.birthday}</li>
                        <li>Occupation: {character.occupation}</li>
                        <li>Status: {character.status}</li>
                        <button onClick={() => character.handleClick()}></button>
                    </ul>
                </div>
            </div>
        </div>
    );
    // const loading = () => <h1>No Character is Selected</h1>

    // return character ? loaded() : loading();

    
};


export default Character;
