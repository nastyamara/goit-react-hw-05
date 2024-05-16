import { Link} from "react-router-dom"

export default function Navigation() {
    return (
   <nav>
           <Link to='/'  className="homeLink">Home</Link>
      <Link to='/movies'>Movies</Link>
      </nav>


    )
}