import { Link } from 'react-router-dom'

export default function GraphicTees() {
   return (
      <div>
         <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/graphic-tees">Graphic Tees</Link>
         </nav>
         <h1>Graphic Tees</h1>
      </div>
   )
}