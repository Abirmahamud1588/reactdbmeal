import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cat from '../Cat/Cat';

const Categorydet = () => {
    const details = useLoaderData();
    console.log(details.meals);
    return (
        <div style={{width:'1280px', margin:'auto', }}>

<div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)',gap:'50px'}}>
                {
                    details.meals.map(detail => <Cat detail={detail}></Cat>)
                }
        </div> </div>
    );
};

export default Categorydet;