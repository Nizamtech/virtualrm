import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <div >
     

      <h1 className=' text-orange-800'>Hello World</h1>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
