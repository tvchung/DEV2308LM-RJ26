import logodev from './logo.png';
import './App.css';
import JSXExpression from './components/JSXExpression';
import FuncCompDemo from './components/FuncCompDemo';
import ClassCompDemo from './components/ClassCompDemo';
import Member from './components/Member';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logodev} className="" alt="logo" />
        {/* <img src='logo.png' alt='Devmaster' /> */}
        {/* <img src='images/logo.png' alt='Devmaster' /> */}
      </header>
      <h1>Học fontend với thư viên ReactJS</h1>
      <h2>JSX Expression</h2>
      <JSXExpression />

      <FuncCompDemo></FuncCompDemo>
      <ClassCompDemo></ClassCompDemo>

      <Member name="Chung chung" age="45" company="Devmaster" ></Member>
    </div>
   
  );
}

export default App;
