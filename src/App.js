import logo from './logo.svg';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import img10 from './assets/img10.jpg'
import img11 from './assets/img11.jpg'
import './App.css';

import { Link } from 'react-router-dom'

// Some cool functionality, filtering to show only certain keywords after certain button presses

function App() {
  const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to="/album-covers">Album Covers</Link> |{" "}
        <Link to="/graphic-tees">Graphic Tees</Link>
      </nav>
      <div className="img-section">
        <div className="img-holder">
          {imgArr.map((img, ind) => (
              <div>
                <img className="carousel-img" src={img} key={ind} alt={ind} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
