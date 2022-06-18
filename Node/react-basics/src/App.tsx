import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ComponentOne from './components/ComponentOne/ComponentOne';
import ComponentTwo from './components/ComponentTwo/ComponentTwo';
import Events from './events/Events';
import ListComponent from './lists/ListComponent';
import Nav from './nav/Nav';
import Problem from './problem/Problem';
import Button from './props/ChildComponent/Button';
import ParentComponent from './props/ParentComponent/ParentComponent';
import Hooks from './hooks/Hooks';


function App() : JSX.Element{
  return (
    <>
    {/* {<h2>Intro to Components</h2>
    <ComponentOne/>
    <h2>Events</h2>
    <Events/>
    <h2>Props</h2>
    <ParentComponent/>
    <h2>Lists</h2>
    <ListComponent/>
    <h2>Problem</h2>
    <Problem/>
    <h2>Solutions</h2>
    <Hooks/>} */}
    <Nav/>
    <Routes>
      <Route path='/' element={<ComponentOne/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/props' element={<ParentComponent/>}/>
        <Route path='/lists' element={<ListComponent/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
    </Routes>
    </>
   
  );
}

// class App extends React.Component{
//   render(): React.ReactNode{
//     return (
//       <>
//         <h2> Hello World! </h2>
//         <div>Element 2</div>
//       </>

//     );
//   }
// }

export default App;
