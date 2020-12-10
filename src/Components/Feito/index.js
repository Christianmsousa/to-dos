import React from 'react';
import "./styles.css"

function Feito(props){
  const { feito } = props;
  return(
    <ul>
      <hr></hr>       
    {feito.map(items => (<li className="Fazendo">
          <h4>{items.tarefa}</h4>
      </li>))}
      <hr></hr>
    </ul>
  );
}

export default Feito;