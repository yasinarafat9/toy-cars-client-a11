import { Link } from 'react-router-dom';
import './CardMyToys.css'
import { FaStar } from "react-icons/fa";

const CardMyToys = ({ toy, handleDelete }) => {
    const { _id, name, email, toyName, price, subcategory, rating, quantity, toyImgUrl, description } = toy;

    

    return (
        <div>
            <div className='my-toy-dives'>
                <div>
                    { toyImgUrl && <img src={toyImgUrl} alt="" />}
                </div>
                <div>
                    <h5>{toyName}</h5>
                    <h4>Price: {price}</h4>
                    <h6>Sub-Category: {subcategory}</h6>
                    <h6>
                        Total Ratings: {rating} <FaStar className='gold' />
                        <FaStar className='gold' />
                        <FaStar className='gold' />
                        <FaStar className='gold' />
                        <FaStar className='gold' />
                    </h6>
                    <h6>Available quantity: {quantity}</h6>
                </div>
                <div className='btn-container'>
                    <button onClick={() => handleDelete(_id)} className='btn-delete'>Delete</button>
                    <Link to={`/updateToy/${_id}`}><button  className='btn-update'>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardMyToys;