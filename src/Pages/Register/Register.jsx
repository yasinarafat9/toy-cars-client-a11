import './Register.css'
import { Link } from 'react-router-dom';
import { FaGoogle, FaTwitter } from "react-icons/fa";
const Register = () => {
    return (
        <div className="mx-auto">
            <div className="mx-auto form-box">
                <form className="">
                    <div>
                        <h5>Your Name:</h5>
                        <input type="text" name="name" placeholder="Enter your Name" />
                    </div>
                    <br />
                    <div>
                        <h5>Email:</h5>
                        <input type="eamil" name="email" placeholder="Enter your Email" />
                    </div>
                    <br />
                    <div>
                        <h5>Password:</h5>
                        <input type="password" name="password" placeholder="Enter Password" />
                        <br />
                        <button className='btn-web my-4 mx-auto'>Register</button>
                    </div>
                    <div>
                        <div className='text-center my-3'>
                            <p className='my-2'>Or login Using..
                            <FaGoogle className='text-danger fs-2 m-2' />
                            <FaTwitter className='text-primary fs-2 m-2' />
                            </p>
                            
                            <p>Already have an Account?<Link to='/login'>Please Login</Link></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;