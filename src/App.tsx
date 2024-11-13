import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Myprofile from './pages/Myprofile';
import Activity from './pages/Activity';
import Header from './components/header';
import Footer from './components/Footer';
import Explore from './pages/Explore';
import Create from './pages/Create';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-activity' element={<Activity />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/create' element={<Create/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
