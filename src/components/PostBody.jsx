import React from 'react';
import { Link, useParams } from 'react-router-dom'

function PostBody() {
    const id = useParams();

    console.log(id);

    return <div>
        <h1>Post body</h1>
    </div>
}