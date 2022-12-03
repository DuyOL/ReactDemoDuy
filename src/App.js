import logo from './logo.svg';
import './App.scss';
import MyComponent from './components/MyComponent';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        {/* Hello world với Nguyễn Duy &amp; Hải Dương */}
        <MyComponent></MyComponent>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World React.Js (Nguyễn Đức Duy)
//         </p>
//         {/* <div>Count = {count}</div>
//         <button onclick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onclick={() => dispatch(increaseCounter())}>Decrease</button> */}
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

export default App;
