import React from 'react'

export default function Select(props){

    const opcoes = [
      ['Masculino','Feminino','Prefiro não dizer'],
      ['Solteiro', 'Casado','Separado', 'Divorciado', 'Viúvo'],
      ['Sim, possuo carro', 'Sim, possuo moto', 'Sim, possuo carro e moto', 'Não'],
      ['AC','AL','AP','AM','BA','CE', 'DF','ES','GO', 'MA','MT','MS','MG','PA','PB', 'PR','PE','PI','RR','RO','RJ','RN','RS','SC', 'SP', 'SE' , 'TO']
    ]
  
    
    return(    
      <>
        <div className="card-select">
          <div className="select">
            <label htmlFor={props.title}>{props.title}</label>
            <select name={props.name} id="">
             {opcoes[props.indice]?.map((opcao)=>(
              <option key={opcao} >{opcao}</option>
             ))}
            </select>
          </div>
        </div>
      </>
    )
  }