import React from 'react';
import './App.css';
import ComponentOne from './components/ComponentOne/ComponentOne';
import ComponentTwo from './components/ComponentTwo/ComponentTwo';
import Events from './events/Events';
import ListComponent from './lists/ListComponent';
import Button from './props/ChildComponent/Button';
import ParentComponent from './props/ParentComponent/ParentComponent';


function App() : JSX.Element{
  return (
    <>
    <h2>Intro to Components</h2>
    <ComponentOne/>
    <h2>Events</h2>
    <Events/>
    <h2>Props</h2>
    <ParentComponent/>
    <h2>Lists</h2>
    <ListComponent/>
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
