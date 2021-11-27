
import React, { useEffect, useState } from 'react';
import Single from './Single';
import './Blog.css';

const Blog = () => {

    const [blog, setblog] = useState([]);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( (data) => data.json() )
        .then( (data) => setblog(data) );

    }, [])



    console.log(blog)

    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    {
                        blog.map( (data) => <Single blog={data}></Single> )
                    }
                </div>
            </div>
        </div>
    )
};

export default Blog;
