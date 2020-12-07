import './App.css';
import Layout from './Layout'
import {Route} from 'react-router'
import {useState} from 'react'

function App() {

  // const [pos, setPos] = useState({
  //   x: 0,
  //   y: 0  
  // })

  // const fun = (e) => {
  //   console.log(e)
  //   setPos({
  //     x:e.pageX,
  //     y:e.pageY
  //   })  
  // }

  return (
    <div className="app">
      <h1 draggable='true'>hello</h1>
      <Route path="/" component={Layout} />
    </div>
  );
}

export default App;
