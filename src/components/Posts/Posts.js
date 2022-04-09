import React from 'react';
import './Posts.css';

function Posts(post){
  return(
    <div className="post">
      User Id : {post.userId} <br/>
      Id : {post.id} <br/>
      Title : {post.title} <br/>
      </div>
  )
}
export default Posts;