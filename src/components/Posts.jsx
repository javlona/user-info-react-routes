import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Posts( {data} ) {

    const navigate = useNavigate()

    const gateHandler = (id) => {
        navigate(`/posts/${id}`)
    }

    const pushHandler = () => {
    }

    console.log(data);
    
    if(!data?.length) return <h2>Loading........</h2>
    
    return (
        <div>
            <ul>
                {
                    data?.map(post => (
                        <li key={ post.id } onClick={() => gateHandler(post.id)}>
                            { post.title }
                        </li>
                    ))
                }
            </ul>
            <Link to={ "/" }>back</Link>
        </div>
    )
}

export default Posts;
