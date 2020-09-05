import React from 'react';

const Form =({setInputText, inputText, setTodos, todos})=>{
  //handlers
  const inputTextHandler =(e)=>{
    setInputText(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    setTodos([
      ...todos,
      {text:inputText,completed:false,id:todos.length}
    ])
    setInputText('');
  }
  return(
  <form onSubmit={submitHandler}>
<input value ={inputText} onChange={inputTextHandler} type="text"/>
<button type='submit'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </form>
  )
}

export default Form;
