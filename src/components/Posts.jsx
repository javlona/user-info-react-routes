import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Posts extends Component {
    
    pushHandler = () => {
        console.log(this.props);
    }
  
    render() {
        const { data } = this.props;
        console.log(data);

    return (
        <div>
            <ul>
                {
                    data.map(post => (
                        <li key={ post.id } >
                            <Link to={`/posts/${ post.id }` }>{ post.title }</Link>
                        </li>
                    ))
                }
            </ul>
            <Link to={ "/" }>back</Link>
        </div>
    )
  }
}

export default Posts;
