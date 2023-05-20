import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { logIn, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error));
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
                <form onSubmit={handleLogin} >
                    <div className=''>
                        <h5>Email:</h5>
                        <input type="text" name="email" placeholder="Enter your Email" />
                    </div>
                    <br />
                    <div>
                        <h5>Password:</h5>
                        <input type="password" name="password" placeholder="Enter Password" />
                        <br />
                    </div>
                    <div className='text-center'>

                        <button className='btn-web my-4 mx-auto'>Login</button>
                    </div>
                </form>
                <div>
                    <div className='text-center my-3'>
                        <p className='my-2'>Or login Using..</p>
                        <FaGoogle className='text-danger fs-2 m-2' onClick={handleGoogleLogin} />
                        <FaTwitter className='text-primary fs-2 m-2' />
                        <p>New to this website? <Link to='/register'>Please Register</Link></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;