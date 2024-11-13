import home from '../assets/unsplash_OG44d93iNJk.png';
import img1 from '../assets/unsplash_ruJm3dBXCqw.png';
import img2 from '../assets/unsplash_9XngoIpxcEo.png';
import img3 from '../assets/unsplash_7pQszt9KiEY.png';
import img4 from '../assets/unsplash_wN9DU73b8_s.png';
import icon1 from '../assets/Group 1268.png';
import icon2 from '../assets/Group 1269.png';
import icon3 from '../assets/Group 1270.png';
import icon4 from '../assets/Group 1271.png';
import imgn1 from '../assets/unsplash_Lki74Jj7H-U.png';
import imgn2 from '../assets/unsplash_hoS3dzgpHzw.png';
import imgn3 from '../assets/unsplash_UD5drKd4H6w.png';
import imgn4 from '../assets/unsplash_crs2vlkSe98.png';
import imgm1 from '../assets/unsplash_9AdeEdYB2yk.png';
import imgm2 from '../assets/unsplash_bU8TeXhsPcY.png';
import imgm3 from '../assets/unsplash_fg7J6NnebBc.png';
import imgm4 from '../assets/unsplash_trYl7JYATH0.png';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const create = () => {
        navigate("/create")
    }
    const explore = () => {
        navigate ("/Explore")
    }

    return (
        <div>
            <div className="main-section">
                <div className="text-content">
                    <h1>Discover, collect, <br /> and charity in <br /> extraordinary NFT <br /> marketplace</h1>
                    <p>In aenean posuere lorem risus nec. Tempor <br /> tincidunt aenean purus purus vestibulum nibh mi <br /> venenatis</p>
                    <div className="botones">
                        <button onClick={explore}className="btn btn-explore">EXPLORE</button>
                        <button onClick={create} className="btn btn-create2">CREATE</button>
                    </div>
                </div>

                <div className="image-content">
                    <img src={home} alt="Home" />
                </div>
            </div>

            <div className="contend-card">
                {[img1, img2, img3, img4].map((img, index) => (
                    <div className="card-box" key={index}>
                        <img src={img} alt={`Card ${index + 1}`} />
                        <h6>Test Images</h6>
                        <hr />
                    </div>
                ))}
            </div>

            <h2>Getting started</h2>
            <div className='texto'>
                <p>Eu, molestie commodo, enim pellentesque turpis integer sagittis</p>
            </div>
            <div className="icon-content">
                {[icon1, icon2, icon3, icon4].map((icon, index) => (
                    <div className="icon" key={index}>
                        <img src={icon} alt={`Icon ${index + 1}`} />
                        <h5>Sample Heading</h5>
                    </div>
                ))}
            </div>
            <div className='menu2-content'>
                <h3>Discover</h3>
                <nav>
                    <ul>
                        <li><a href="#"></a>Category</li><span className="material-symbols-outlined">stat_minus_1</span>
                        <li><a href="#"></a>Cheapest</li><span className="material-symbols-outlined">stat_minus_1</span>
                        <li><a href="#"></a>Newest</li><span className="material-symbols-outlined">stat_minus_1</span>
                        <button className='btn-create2 filterbtn'>Filter</button>
                    </ul>
                </nav>
            </div>
            <div className="contend-card groupcard2">
                {[imgn1, imgn2, imgn3, imgn4].map((img, index) => (
                    <div className="card-box" key={index}>
                        <img src={img} alt={`Card ${index + 1}`} />
                        <h6>Test Images</h6>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="contend-card groupcard3">
                {[imgm1, imgm2, imgm3, imgm4].map((img, index) => (
                    <div className="card-box" key={index}>
                        <img src={img} alt={`Card ${index + 1}`} />
                        <h6>Test Images</h6>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
