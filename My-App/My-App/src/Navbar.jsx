import { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {

    var[dropdown,showDropdown] = useState(false)

    const toggleDropdown = () =>{
        showDropdown(!dropdown)
    }

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/about' className="link">About</Link></li>
                    <li><Link to='/gallery' className="link">Gallery</Link></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                    <div>
                        <span onMouseEnter={toggleDropdown} >Hooks</span>
                        {dropdown && (<ul onMouseLeave={toggleDropdown}>
                            <li><Link to='/usestate'>usestate</Link></li>
                            <li><Link to='/useeffect'>useeffect</Link></li>
                        </ul>)}
                    </div>
                    <li><Link to='/signup' className="link">Signup</Link></li>
                </ol>
            </nav>
        </header>
    )
}

export default Navbar