import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import './App.css';
import EmpListings from './components/EmpListings';

function App() {
  return (
    <div className="App">
      
      <h1>React Js CRUD Operation</h1>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListings/>}>

        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
