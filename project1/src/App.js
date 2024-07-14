
import './App.css';
import FunctionalComponent from './Components/FunctionalComp';
import {ClassComponent, ClassComponent1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
import ClassProps from './Components/ClassProps';
import FunctionProps from './Components/FunctionProps';



function App() {
  return (
    <div>
   <h1> Hello , welcome to first program</h1>
   <FunctionalComponent></FunctionalComponent>
   <ClassComponent />
   <ClassComponent1 />
   <Click />
   <Counter /> 
    {/* <ParentComp /> */}
   <ClassProps name="Nilam" />
   <ClassProps name="Pooja" />
   <ClassProps name="Divya" />
   <FunctionProps name ="poonam" />
  
   </div>
  );
}

export default App;
