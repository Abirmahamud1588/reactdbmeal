import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {idCategory ,strCategoryThumb,strCategory ,strCategoryDescription
    } =post;
    return (
        <div className='card' style={{textAlign:'center', border: '2px solid #dddddd'}}>
            <img src={strCategoryThumb} alt="" />
            <h1 >Id: {idCategory}</h1>
            <p >Title: {strCategory}</p>
            <h2 >Body: {strCategoryDescription}</h2>
            <Link to ={`/post/${strCategory}`}>DetailS</Link>
            
        </div>
    );
};

export default Post;