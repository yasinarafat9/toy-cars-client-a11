import { Link } from 'react-router-dom';
import './Footer.css'
import toyCarsLogo  from '../../../assets/toy cars logo.png'

const Footer = () => {
    return (

        <footer className='footer-bg'>
            <div className='footer-divs'>
                <div className='img-p'>
                    <img src={toyCarsLogo} alt="" />
                    <p className='w-20 text-left my-1'>Super Toy Cars panders to a sense of nostalgia in its audience. It harkens back the Micro Machines games of past generations, or perhaps even Revolt on the Dreamcast.  </p>
                </div>
                <div>
                    <h6>About</h6>
                    <Link className='text-style'to=''>About</Link>
                    <Link className='text-style'to=''>Home</Link>
                    <Link className='text-style'to=''>Service</Link>
                    <Link className='text-style'to=''>Contact</Link>
                </div>
                <div>
                    <h6>Company</h6>
                    <Link className='text-style'to=''>Toy makers</Link>
                    <Link className='text-style'to=''>About us</Link>
                    <Link className='text-style'to=''>Blogs</Link>
                    
                </div>
                <div>
                    <h6>Support</h6>
                    <Link className='text-style'to=''>Support Center</Link>
                    <Link className='text-style'to=''>Feedback</Link>
                    <Link className='text-style'to=''>Accesbility</Link>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;