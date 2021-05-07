import React from 'react';
import Character from '../components/Character';

const MyList = (props) => {
    return (
        <div className='myListCards'>
            {props.mylist.map((eachCharacter) => <Character character={eachCharacter} key={eachCharacter.id} 
            handleClick={props.removeFromList} label="Remove From List"/>)}
        </div>
    );
};


export default MyList;
