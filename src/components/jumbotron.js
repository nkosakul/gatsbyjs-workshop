import React from 'react';

const Jumbotron = ({title, image}) => (
  <div className="jumbotron">
    <h1>{title}</h1>
    <img src={`/images/${image}`} alt="alttext"/>
  </div>
);

export default Jumbotron
