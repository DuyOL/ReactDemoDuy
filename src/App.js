import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div>
      Hello world với Nguyễn Duy &amp; Thơ Ông Đệ
      <MyComponent></MyComponent>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello World React.Js (Nguyễn Đức Duy)
    //     </p>
    //     {/* <div>Count = {count}</div>
    //     <button onclick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onclick={() => dispatch(increaseCounter())}>Decrease</button> */}
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
