import {Link} from "react-router-dom"
import { isPropertySignature } from "typescript";

export default function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> Welcome</Link>
            <ul>
                <li> 
                    <Link to="/" className="site-title"> Home</Link>
                </li>
                <li>
                    <Link to="/about" className="site-title"> About </Link>
                </li>
                <li>
                    <Link to="/sprints" className="site-title"> Sprints </Link>
                </li>
            </ul>
        </nav>
    )
}