import React, { Component } from 'react';

class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={ post.id }>
                            { post.title }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
  }
}

export default Posts;
