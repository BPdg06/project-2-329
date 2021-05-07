import React from 'react';


const Character = ({character, handleClick, label}) => {
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
                        <li><strong>Actor Name: </strong>{character.portrayed}</li>
                        <li><strong>Nickname: </strong>{character.nickname}</li>
                        <li><strong>Birthday: </strong> {character.birthday}</li>
                        <li><strong>Occupation: </strong>{character.occupation}</li>
                        <li><strong>Status: </strong> {character.status}</li>
                        <button onClick={() => handleClick(character)}>{label}</button>
                    </ul>
                </div>
            </div>
        </div>
    );
    // const loading = () => <h1>No Character is Selected</h1>

    // return character ? loaded() : loading();

    
};


export default Character;
