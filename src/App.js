import './App.css';
import Layout from './Pages/Layout/Layout'
import {Route} from 'react-router'

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
      {/* <Route path="/" component={Layout} /> */}
      <Route path="/" component={Layout} />
    </div>
  );
}

export default App;
