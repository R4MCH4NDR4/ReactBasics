import logo from './logo.svg';
import './App.css';
import React from 'react';
import GreetComponent from './components/Greet' //default import syntax
//import {Greet} from './components/Greet' // named import
import Welcome  from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import Parent from './components/Parent';
import UserGreet from './components/UserGreet';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/style.css';
import styles from './components/style.module.css'
import ReactForm from './components/ReactForm';
import LifeCycleA from './components/LifeCycleA';
//Functional type component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//            Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//Class component
class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <LifeCycleA></LifeCycleA>
        {/* <ReactForm></ReactForm> */}
        {/* <h1 className='error'>I'm from regular css file</h1>
        <h1 className={styles.success}>I'm from css module</h1> */}
        {/* <Inline></Inline> */}
        {/* <Stylesheet primary={true}></Stylesheet> */}
        {/* <NameList></NameList> */}
        {/* <UserGreet></UserGreet> */}
        {/* <Parent></Parent> */}
        {/* <GreetComponent first_name = 'Ram' last_name = 'Reddy'></GreetComponent>
        <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <Welcome name = "Bank coaching" heroname = 'tr'/>
        <Counter/> */}
        {/* <Hello/>
         <GreetComponent name="Ram"><p>I'm a software professional</p></GreetComponent> */}
         {/* <Welcome name = "React"/>
         <Hello/>
         <GreetComponent name="Abhi"><button>Lets catchup</button></GreetComponent>
         <Welcome name = "Bank coaching"/>
         <Hello/>
         <GreetComponent name="Zakeer"><a href='www.google.com'>Click me</a></GreetComponent>
         <Welcome name = "Mobile hardware"/> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lear React
          </a> */}
          {/* <Message/> */}
        </header>
      </div>
    )
  }
}

export default App;
