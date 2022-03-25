import './App.css';
import { useState } from 'react';
import Button from './components/Button'
import Value from './components/Value';


function App() {

  const [ count, setCount ]  = useState(0)

  const minLimit = () => {
    if(count > 0){
      setCount(count - 1)
    } 
    return
  }
  const maxLimit = () => {
    if(count < 20){
      setCount(count + 1)
    } 
    return
  }

  return (
    <div className="App">
      <header className="App-header">
        <Value value={count} />
        <Button name='Aumentar' func={maxLimit}/>
        <Button name='Disminuir' func={minLimit} />
      </header>
    </div>
  );
}

export default App;
