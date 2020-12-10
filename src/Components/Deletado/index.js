import React from 'react';
import "./styles.css"

function Deletado(props){
  const { deletado } = props;
  return(
    <ul>
      <hr></hr>       
    {deletado.map(items => (<li className="Fazendo">
          <h4>{items.tarefa}</h4>
      </li>))}
      <hr></hr>
    </ul>
  );
}

export default Deletado;