import { Link } from 'react-router-dom'

export default function AlbumCovers() {
   return (
      <div>
         <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/graphic-tees">Graphic Tees</Link>
         </nav>
         <h1>Album Covers</h1>
      </div>
   )
}