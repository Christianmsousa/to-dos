import React from 'react';
import "./styles.css"

function Fazendo(props){
  const { todos, removerTodo, addFeito} = props;
  return(
    <ul>
      <hr></hr>
    {todos.map(items => (<li className="Fazendo">
          <h4>{items.tarefa}</h4>
          <div>
            <buton onClick={() => addFeito(items.id, items.tarefa)}><i class="fas fa-check"></i></buton>
            <button onClick={() => removerTodo(items.id, items.tarefa)}><i className="fas fa-trash"></i></button>
          </div>

      </li>))}
      <hr></hr>
    </ul>
  );
}

export default Fazendo;