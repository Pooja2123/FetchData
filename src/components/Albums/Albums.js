import React from 'react';
import './Albums.css';

function Albums(album){
  return(
    <div className="album">
      UserId : {album.userId} <br/>
      Id : {album.id} <br/>
      Title : {album.title} <br/>
      </div>
  )
}
export default Albums;