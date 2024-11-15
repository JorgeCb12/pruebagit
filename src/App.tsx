import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Myprofile from './pages/Myprofile';
import Activity from './pages/Activity';
import Explore from './pages/Explore';
import Create from './pages/Create';
import LoginForm from './pages/LoginForm';
import FullLayout from './layouts/FullLayout';
import BlankLayout from './layouts/BlankLayout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FullLayout><Home /></FullLayout>} />
        <Route path='/login' element={<BlankLayout><LoginForm /></BlankLayout>} />
        <Route path='/my-profile' element={<FullLayout><Myprofile /></FullLayout>} />
        <Route path='/my-activity' element={<FullLayout><Activity /></FullLayout>} />
        <Route path='/explore' element={<FullLayout><Explore /></FullLayout>} />
        <Route path='/create' element={<FullLayout><Create /></FullLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
