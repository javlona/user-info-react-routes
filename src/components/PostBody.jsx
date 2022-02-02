import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'

export default function PostBody() {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [user, setUser] = useState({})


    const fetchPost = async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const res = await data.json()
            setData(res)
        }

        catch (err) {
            console.log(err)
        }
    }

    console.log(data.userId);
    
    

    useEffect(() => {
       fetchPost()
    }, [])

    useEffect(() => {
        setTimeout(() =>fetchUser(), 1000)
    }, [])

    async function fetchUser () {
        try {
            const user = await fetch(`https://jsonplaceholder.typicode.com/users/${data?.userId}`)
            const res = await user.json()
            setUser(res)
        }

        catch(err){
            console.log(err)
        }
    }

    console.log(data.userId);

    return <div>
        <h1>Post body</h1>
        <h3>{ data.title }</h3>
        <p>{ data.body }</p>
        <p>Post by: { user.name }</p>
    </div>
}