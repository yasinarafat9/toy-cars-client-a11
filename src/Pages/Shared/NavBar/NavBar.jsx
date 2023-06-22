import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import toyCarsLogo from '../../../assets/toy cars logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {user.displayName}
          <br />
          {user.email}
        </Tooltip>
      );

////////;;;;;;;///
    return (
        <nav className='nav-bg'>
            <div className='nav-dives d-flex justify-between'>
                <div className='nav-img-name'>
                    <img src={toyCarsLogo} alt="" />
                    <h4>Super Toy Cars</h4>
                </div>
                <div className='d-flex justify-content-between'>
                    <NavLink className='nav-words' to='/' >Home</NavLink>
                    <NavLink className='nav-words' to='/blogs' >Blogs</NavLink>
                    <NavLink className='nav-words' to='/allToys' >All Toys</NavLink>
                    {
                        user?.email ?
                            <>
                                <NavLink className='nav-words' to='/myToys' >My Toys</NavLink>
                                <NavLink className='nav-words' to='/addAToy' >Add a Toy</NavLink>
                            </>
                            : ''
                    }
                </div>
                <div className='user-nav'>

                    {
                        user?.email ?
                            <>
                                <div className='d-flex align-items-center'>
                                    <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        
                                    <img src={user.photoURL} alt="" />
                                    </OverlayTrigger>
                                    <button className='btn-web' onClick={handleLogOut}>Log Out</button>
                                </div>
                            </>
                            :
                            <Link to='/login'><button className='btn-web'>Login</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;