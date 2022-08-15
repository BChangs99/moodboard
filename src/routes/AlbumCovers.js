import { Link, Outlet } from 'react-router-dom'
import { getAlbumCovers } from '../data'

export default function AlbumCovers() {
   let albumCovers = getAlbumCovers();
   
   return (
      <div>
         <nav
            style={{
               borderRight: "solid 1px",
               padding: "1rem",
            }}
         >
            <Link to="/">Home</Link> |{" "}
            <Link to="/graphic-tees">Graphic Tees</Link>
            {albumCovers.map((cover => (
               <Link 
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`/album-covers/${cover.title}`}
                  key={cover.title}
               >
                  {cover.title}
               </Link>
            )))}
         </nav>
         <Outlet />
         <h1>Album Covers</h1>
      </div>
   )
}