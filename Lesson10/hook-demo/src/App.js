import './App.css';
import DemoContext from './components/DemoContext';
import DemoUseEffect from './components/DemoUseEffect';
import DemoUseState from './components/DemoUseState';
import ListCategories from './components/ListCategories';

function App() {
  return (
    <div className="container">
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster Academy" />
        <hr/>
        <DemoUseState />
        <DemoUseEffect />
        <DemoContext />

        <ListCategories />
    </div>
  );
}

export default App;
