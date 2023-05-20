import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)

        setError('')
        setSuccess('')
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(result.message)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }



    return (
        <div className="mx-auto">
            <div className="mx-auto form-box">
                <form onSubmit={handleRegister} >
                    <div>
                        <h5>Your Name:</h5>
                        <input type="text" name="name" placeholder="Enter your Name" required />
                    </div>
                    <br />
                    <div>
                        <h5>Email:</h5>
                        <input type="email" name="email" placeholder="Enter your Email" required />
                    </div>
                    <br />
                    <div>
                        <h5>Password:</h5>
                        <input type="password" name="password" placeholder="Enter Password" required />
                        <br />
                    </div>
                    {
                        <>
                            <div className='p-width'>
                                <p className='text-danger pt-2'>{error}</p>
                                <p className='text-success pt-2'>{success}</p>
                            </div>
                        </>
                    }
                    <div className='text-center'>
                        <button className='btn-web my-4 mx-auto'>Register</button>
                    </div>
                </form>
                <div>
                    <div className='text-center my-3'>
                        <p className='my-2'>Or login Using..
                            <FaGoogle className='text-danger fs-2 m-2' onClick={handleGoogleLogin} />
                            <FaTwitter className='text-primary fs-2 m-2' />
                        </p>

                        <p>Already have an Account?<Link to='/login'>Please Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;