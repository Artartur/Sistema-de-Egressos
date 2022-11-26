import React from 'react'

export default function InputForm (props){
    return (
      <>
        <div className="card-inputs">
          <div className="inputs">
            <label htmlFor={props.title}>{props.title}</label>
            <input type={props.type} placeholder={props.title} name={props.name} required={props.required}/>
          </div>
        </div>
      </>
    );
  };