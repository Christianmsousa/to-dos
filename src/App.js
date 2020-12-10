// import React from 'react';
import './App.css';
import Fazendo from './Components/Fazendo';
import Deletado from './Components/Deletado';
import Feito from './Components/Feito';
import React, { useState, useEffect } from 'react';


function App() {

  const [todos, setTodos] = useState([]);
  const [feito, setFeito] = useState([]);
  const [deletado, setDeletado] = useState([]);
  const [item, setItem] = useState("Fazendo");
  const [count, setCount] = useState(1);

  function adicionarTodo(){
    const valor = document.querySelector('.vl');
    if(valor.value === ""){
      alert("Voce precisa digitar um valor")
    } else{
      setCount(prevCount => prevCount +1);
      const valores = valor.value[0].toUpperCase() + valor.value.substr(1);
      setTodos([...todos, {id: count, tarefa: valores }])

      valor.value = "";
    }
  }
  function addFeito(id, tarefa){
    setFeito([...feito, {id: id, tarefa: tarefa}]);
    setTodos(todos.filter((elementos) => elementos.tarefa !== tarefa))
  }
  function removerTodo(id, tarefa) {

    setDeletado([...deletado, {id: id, tarefa: tarefa}]);
    setTodos(todos.filter((elementos) => elementos.tarefa !== tarefa))
  }
  useEffect(() =>{
    const items = JSON.parse(localStorage.getItem('tarefas'));
    if (items) {
      setTodos(items);
    }
    const items2 = JSON.parse(localStorage.getItem('Deletado'));
    if (items2) {
      setDeletado(items2);
    }
    const items3 = JSON.parse(localStorage.getItem('Feito'));
    if (items3) {
      setFeito(items3);
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("tarefas", JSON.stringify(todos));
    localStorage.setItem("Deletado", JSON.stringify(deletado));
    localStorage.setItem("Feito", JSON.stringify(feito));
  },[todos, deletado, feito])



  return (
    <div className="container">
      <section className="Welcome">
        <h1>To Dos</h1>
        <p>Seu gerenciador de tarefas</p>
        <div className="link-social">
          <a target="_blank" href="https://www.linkedin.com/in/christiansousaa/"><i class="fab fa-linkedin"></i> LinkedIn</a>
          <a target="_blank" href="https://github.com/Christianmsousa"><i class="fab fa-github"></i> GitHub</a>
        </div>
      </section>
      <section className="conteudo">
        <div className="card">
          <select onChange={(e) => setItem(e.target.value)}>
            <option value="Fazendo">Fazendo</option>
            <option value="Feito">Feito</option>
            <option value="Deletado">Deletado</option>
          </select>
          <div>
          { item === "Fazendo" ? <Fazendo {...{todos, removerTodo, addFeito}} /> : item === "Deletado" && <Deletado {...{deletado}} /> }
          { item === "Feito" && <Feito {...{feito, removerTodo}} /> }

          <br></br>
            <div className="input-todo">
              <input className="vl" placeholder="Digite uma tarefa" type="text"/>
              <button onClick={()=> adicionarTodo()}><i className="fas fa-plus"></i></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default App;
