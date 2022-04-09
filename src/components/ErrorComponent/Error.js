import React from 'react';
import './Error.css';

function Errors(error){
  return(
    <div className="error">
      <h1> </h1>
      Description : {error.description} <br/>
      Status : {error.status}
      </div>
  )
}
export default Errors;
