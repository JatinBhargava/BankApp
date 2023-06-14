import './App.css';
import Home from './component/Home';
import { Routes,Route} from 'react-router-dom'
import AddAccount from './component/AddAccount';
import Nav from './component/Nav';
import Accounts from './component/Accounts';
import Transfer from './component/Transfer';


function App() {
  return (
    <div className="App">
      <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addaccount' element={<AddAccount/>}></Route>
        <Route path='/accounts' element={<Accounts/>}></Route>
        <Route path='/transcation' element={<Transfer/>}></Route>
      </Routes>
      </>
    </div>
  );
}

export default App;
