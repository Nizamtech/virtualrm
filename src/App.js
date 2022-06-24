import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Shared/Sidebar/Sidebar';
import Test1 from './Components/Test1/Test1';
import Test2 from './Components/Test1/Test2';
function App() {
  return (

     <div className='grid grid-cols-12 mt-5 mx-10'>
       <div className='col-span-2  '>
          <Sidebar  />
       </div>
    
     <div className='col-span-10 '> 
        <Layout>
       <Routes>
         <Route path='/' element={<Dashboard/>} />
         <Route path='/test1' element={<Test1 />} />
         <Route path='/test2' element={<Test2 />} />
       </Routes>
     </Layout>
     </div>
   
     </div>


  );
}

export default App;
