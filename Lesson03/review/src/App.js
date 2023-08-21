import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  return (
    <div className="container border my-5 ">
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster Academy" />
        <h1>Review - ReactJS Basic (phần 1)</h1>
        {/* function component  */}
        <FuncComp />
        <FuncComp name="Chung Chung" age = "45"/>
        {/* class component  */}
        <ClassComp />
        <ClassComp name="Chung Chung" age = "45"/>
    </div>
  );
}

export default App;
