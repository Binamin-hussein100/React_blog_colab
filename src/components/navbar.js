import { Link } from "react-router-dom";

//NAVBAR
    // appending the navbar
    //  React router dom


    
const Navbar = () =>{
    return (
        <div className="navbar-contaainer">
            <div className="intro"></div>
            <div className="navbar-list">
                <Link to='/'>
                    <h4>Home</h4>
                </Link>
                <h4>Blogs</h4>
                <Link to='/certificates'>
                    <h4>Certificate</h4>
                </Link>
                <Link to='/inbox'>
                    <h4>Inbox</h4>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;

