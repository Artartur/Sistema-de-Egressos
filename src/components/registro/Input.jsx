import React from 'react'

export default function Input(props){
    return (
      <>
        <div className="card-inputs-cadastro">
          <div className="inputs-cadastro">
            <label htmlFor={props.title}>{props.title}</label>
            <input type={props.type} />
          </div>
        </div>
      </>
    );
  };