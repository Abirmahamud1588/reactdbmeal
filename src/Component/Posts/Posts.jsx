import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts.categories);
    return (
        <div style={{width:'1280px', margin:'auto', }}>
            <h1>posts: {posts.categories.length}</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)',gap:'50px'}}>
            {    posts.categories.map(post =>   <Post 
            post ={post}
            
            ></Post>)}
            </div>
        </div>
    );
};

export default Posts;