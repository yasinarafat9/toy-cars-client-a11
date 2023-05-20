import './ErrorPage.css'
import errorImg from '../../assets/errorPage.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const ErrorPage = () => {
    return (
        <div>
            <div className='err-pge m-auto text-center'>
                <img src={errorImg} alt="" />
                <br />
                <Link to='/'><Button className='btn-web mt-5'>Go back to Home Page</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;