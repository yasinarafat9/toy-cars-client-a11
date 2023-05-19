import { Link } from 'react-router-dom';
import './NavBar.css'
import toyCarsLogo from '../../../assets/toy cars logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <nav className='nav-bg'>
            <div className='nav-dives d-flex justify-between'>
                <div className='nav-img-name'>
                    <img src={toyCarsLogo} alt="" />
                    <h4>Super Toy Cars</h4>
                </div>
                <div className='d-flex justify-content-between'>
                    <Link className='nav-words' to='' >Home</Link>
                    <Link className='nav-words' to='/blogs' >Blogs</Link>
                    <Link className='nav-words' to='/allToys' >All Toys</Link>
                    {
                        user?.email ?
                        <>
                        <Link className='nav-words' to='/myToys' >My Toys</Link>
                        <Link className='nav-words' to='/addAToy' >Add a Toy</Link>
                        </>
                        : ''
                    }
                </div>
                <div className='user-nav'>

                    {
                        user?.email ?
                            <>
                                <div className='d-flex align-items-center'>
                                {/* <h6 className='p-2 text-center'>{user.displayName}</h6> */}
                                <img src={user.photoURL} alt="" />
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