import { Link } from 'react-router-dom';
import './Footer.css'
import toyCarsLogo from '../../../assets/toy cars logo.png'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className='footer-bg'>
            <div>
                <div className='footer-divs container grid row'>
                    <div className='img-p col col-md-4'>
                        <img src={toyCarsLogo} alt="" />
                        <h2 className='text-white'>Super Toy Cars</h2>
                        <p className='w-20 text-left my-1'>Address:</p>
                        <p className='w-20 text-left my-1'>300 E St SW, Washington, DC 20024</p>
                        <p className='w-20 text-left my-1'>+1 202-358-0000</p>
                        {/* <div>
                        <FaFacebookSquare className='icon-size' />
                        <FaInstagram className='icon-size' />
                        <FaTwitter className='icon-size' />
                        <FaYoutube className='icon-size' />
                    </div> */}
                    </div>
                    <div className='col col-md-4'>
                        <h6>About</h6>
                        <Link className='text-style' to=''>About</Link>
                        <Link className='text-style' to=''>Home</Link>
                        <Link className='text-style' to=''>Service</Link>
                        <Link className='text-style' to=''>Contact</Link>
                    </div>
                    <div className='col col-md-4'>
                        <h6>Company</h6>
                        <Link className='text-style' to=''>Toy makers</Link>
                        <Link className='text-style' to=''>About us</Link>
                        <Link className='text-style' to=''>Blogs</Link>
                        <Link className='text-style' to=''>Follow Us in..</Link>

                    </div>
                    <div className='col col-md-4'>
                        <h6>Support</h6>
                        <Link className='text-style' to=''>Support Center</Link>
                        <Link className='text-style' to=''>Feedback</Link>
                        <Link className='text-style' to=''>Accesbility</Link>
                        <div>
                            <FaFacebookSquare className='icon-size' />
                            <FaInstagram className='icon-size' />
                            <FaTwitter className='icon-size' />
                            <FaYoutube className='icon-size' />
                        </div>
                    </div>

                </div>



            </div>
            <div className='text-center copywrite-footer'>
                <small className='text-white text-center '>@ Copyright 2023 | ALL RIght Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;