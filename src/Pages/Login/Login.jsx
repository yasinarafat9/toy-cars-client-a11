import './Login.css'
import { FaGoogle, FaTwitter } from "react-icons/fa";
const Login = () => {
    return (
        <div className="mx-auto">
            <div className="mx-auto form-box">
                <form className="">
                    <div className=''>
                        <h5>Email:</h5>
                        <input type="text" name="email" placeholder="Enter your Email" />
                    </div>
                    <br />
                    <div>
                        <h5>Password:</h5>
                        <input type="password" name="password" placeholder="Enter Password" />
                    </div>
                    <button className='btn-web my-4 mx-auto'>Login</button>
                    <div>
                        <div className='text-center my-3'>
                            <p className='my-2'>Or login Using..</p>
                            <FaGoogle className='text-danger fs-2 m-2' />
                            <FaTwitter className='text-primary fs-2 m-2' />
                        </div>
                        <div>
                            <p>New to this website? Register</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;