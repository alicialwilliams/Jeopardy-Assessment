import React from 'react';

function GameDisplay (props){
    return(
        <div className="gamedisplay">
            
                <h2 className="question">Question:  {props.question}</h2>
                <h3 className="value">Value:  {props.value}</h3>
                <h3 className="category">Catrgory:  {props.category.title}</h3>
                <h4 className="score">Score:  {props.score}</h4> 
                
           
        </div>

    )
}


export default GameDisplay;