import { Link } from 'react-router-dom';
import './NavBar.css'
import toyCarsLogo from '../../../assets/toy cars logo.png'

const NavBar = () => {
    return (
        <nav className='nav-bg'>
            <div className='nav-dives d-flex justify-between'>
                <div className='nav-img-name'>
                    <img src={toyCarsLogo} alt="" />
                    <h4>Super Toy Cars</h4>
                </div>
                <div className='d-flex justify-content-between'>
                    <Link className='nav-words' to='' >Home</Link>
                    <Link className='nav-words' to='' >All Toys</Link>
                    <Link className='nav-words' to='' >My Toys</Link>
                    <Link className='nav-words' to='/addAToy' >Add a Toy</Link>
                    <Link className='nav-words' to='/blogs' >Blogs</Link>
                </div>
                <div>
                <img src="" alt="" />
                <Link to='/login'><button className='btn-web'>Login</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;