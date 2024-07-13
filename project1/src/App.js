
import './App.css';
import FunctionalComponent from './Components/FunctionalComp';
import {ClassComponent, ClassComponent1} from './Components/ClassComp';
import Click from './Components/Click';
function App() {
  return (
    <div>
   <h1> Hello , welcome to first program</h1>
   <FunctionalComponent></FunctionalComponent>
   <ClassComponent />
   <ClassComponent1 />
   <Click />
  
   </div>
  );
}

export default App;
