import './App.css';
import logo from './assets/Gaslur.png';
import home from './assets/unsplash_OG44d93iNJk.png';
import img1 from './assets/unsplash_ruJm3dBXCqw.png';
import img2 from './assets/unsplash_9XngoIpxcEo.png';
import img3 from './assets/unsplash_7pQszt9KiEY.png';
import img4 from './assets/unsplash_wN9DU73b8_s.png';
import icon1 from './assets/Group 1268.png';
import icon2 from './assets/Group 1269.png';
import icon3 from './assets/Group 1270.png';
import icon4 from './assets/Group 1271.png';


function App() {
  return (
    <>
      <header className='header'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#"></a>HOME</li>
            <li><a href="#"></a>MY PROFILE</li>
            <li><a href="#"></a>ACTIVITY</li>
            <li><a href="#"></a>HOW IT WORKS</li>
            </ul>
        </nav>
        <div className="botones">
          <button className="btn-create">CREATE</button>
          <button className="btn-login">SING IN</button>
        </div>
      </header>
      <div className="main-section">
        <div className="text-content">
       <h1>Discover, collect,  <br/> and charity in <br/> extraordinary NFT <br/> marketplace</h1>
       <p>In aenean posuere lorem risus nec. Tempor <br/> tincidunt aenean purus purus vestibulum nibh mi <br/>  venenatis</p>
       <div className="botones">
          <button className="btn-explore">EXPLORE</button>
          <button className="btn-create2">CREATE</button>
        </div>
       </div>  
       <div className="image-content">
       <img src={home} alt="ome" />
       </div>
       </div>
       <div className="contend-card">
        
       <div className="card-box">
         <img src={img1} alt="logo" />
         <h6>Lorem Ipsum</h6>
       </div>
       <div className="card-box">
         <img src={img2} alt="logo" />
         <h6>Dolor sit amet</h6>
       </div>
       <div className="card-box">
         <img src={img3} alt="logo" />
         <h6>Dignissim curabitu..</h6>
       </div>
       <div className="card-box">
         <img src={img4} alt="logo" />
         <h6>Dignissim curabitu..</h6>
       </div>
       </div>
       <div className="icon-content">
        <div className="icon">
        <img src={icon1} alt="logo" />
        <h6>Dignissim curabitu..</h6>
        </div>
        <div className="icon">
        <img src={icon2} alt="logo" />
        <h6>Dignissim curabitu..</h6>
        </div>
        <div className="icon">
        <img src={icon3} alt="logo" />
        <h6>Dignissim curabitu..</h6>
        </div>
        <div className="icon">
        <img src={icon4} alt="logo" />
        <h6>Dignissim curabitu..</h6>
        </div>
       </div>
    </> 
  );
}

export default App;
