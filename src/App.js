import React,{useState,useEffect} from 'react';
import './App.css';
//import components
import Form from './components/Form'
import Todos from './components/Todos'
import Filter from './components/Filter'
import Name  from './components/Name'
function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  //create a swithc to track the status of the filter input
  const[status, setFilterStatus] = useState('all')
//create a state holding the filtered todos
const[filteredTodos, setFilteredTodos] = useState([]);
const [name, setName] = useState('Tyler');
//functions and events

const filterHandler=()=>{
  switch (status){
    case 'completed':
      setFilteredTodos(todos.filter(item=>item.completed === true));
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(item=>item.completed === false));
        break;
      default:
      setFilteredTodos(todos);
      break;
  }


}
useEffect(()=>{
   getLocalTodos();
},[])
//useEffect
//if [] is the second param then it will execute only
//once the app is first rendered
//if the [] has state or multiple states in it [state]//[state,state2]
//the code will run everytime that state changed
//in this case run efverytime tht filter option is changed
useEffect(()=>{
filterHandler();
saveLocalTodos();
},[todos,status])


//Add functionallity
//that will save the list of todos and keep the data even if page is refreshed
//use local storage.
// SAVE TO LOCAL STORAGE
const saveLocalTodos=()=>{
  localStorage.setItem('todos',JSON.stringify(todos));
};
const getLocalTodos =()=>{
  if (localStorage.getItem('todos')===null) {
    localStorage.setItem('todos',JSON.stringify([]));
  }else{
  let todoFromLocal =  JSON.parse(localStorage.getItem('todos'));
setTodos(todoFromLocal);
  }
}
  return (
    <div className="App">
      <Name name = {name} setName={setName}/>
      <Form todos={todos}setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <Todos setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      <Filter  setFilterStatus={setFilterStatus}/>
    </div>
  );
}

export default App;
