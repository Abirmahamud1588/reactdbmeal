import React from 'react';
import '../Post/Post.css'

const Cat = ({detail}) => {
    const {idMeal,strMeal,strMealThumb} =detail;
    return (
        <div className='card'> 
         <img src={strMealThumb} style={{width:'200px'}} alt="" />
            <h1>{idMeal}</h1>
            <h1>{strMeal}</h1>
           
        </div>
    );
};

export default Cat;