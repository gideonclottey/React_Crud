import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import './App.css';
import EmpListings from './components/EmpListings';
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';
import EmpEdit from './components/EmpEdit';

function App() {
  return (
    <div className="App">
      
      <h1>React Js CRUD Operation</h1>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListings/>}></Route>
        <Route path='/employee/create' element={<EmpCreate/>}></Route>
        <Route path='/employee/detail/:empid' element={<EmpDetail/>}></Route>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}> </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
