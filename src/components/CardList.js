import React from "react";
import Card from './Card';
const CardList = ({robots}) =>{
    if (true) {
        throw new Error('Noooooooooooo!');
    }
    const cardArray = robots.map((robot, i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>;
    })
    return(
        <div className='tc'>
            {cardArray}
        </div>
    )
} 
export default CardList;