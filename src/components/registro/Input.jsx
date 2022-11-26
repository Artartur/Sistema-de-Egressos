import React from 'react'

import '../../styles/input.css'

export default function Input(props){
    return (
      <>
        <div className="card-inputs-cadastro">
          <div className="inputs-cadastro">
            <label htmlFor={props.title}>{props.title}</label>
            <input type={props.type} placeholder={props.title} required={props.required} name={props.name}/>
          </div>
        </div>
      </>
    );
  };