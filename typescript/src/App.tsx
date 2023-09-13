import './App.css';
import TodoList from './TodoList';
function App() {
  return(
    <div className='App'>
      <div className='header'>
        <p className='headertext'>상혁 ToDo 리스트!</p>
      </div>
      <TodoList/>
    </div>
  )
}

export default App;
