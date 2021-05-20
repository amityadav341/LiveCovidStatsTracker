import React from 'react'
import './card.css'

const Card=(props)=> {
  return (
    <>
    <div className="main">
      <div className="card" >
          <h2 className="title"><span >{props.title}</span></h2>
          <h3 className="data">{props.sentData}</h3>
      </div>
      </div>
    </>
  );
}

export default Card;