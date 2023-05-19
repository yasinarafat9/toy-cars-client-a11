import './ViewDetails.css'
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ViewDetails = () => {
    const toy = useLoaderData();
    const { _id, name, email, toyName, price, subcategory, rating, quantity, toyImgUrl, description } = toy;
    return (
        <div className='my-4'>
            <div className='view-details-container'>
                <div className='d-flex'>
                    <img src={toyImgUrl} alt="" />
                    <div>
                        <h4>{toyName}</h4>
                        <p>{description}</p>
                        <div className='sub-details'>
                            <div>
                                <h5>Sub-Category: {subcategory}</h5>
                                <h6>Available Quantity: {quantity}</h6>
                                <p>Total Ratings: {rating} <FaStar className='gold' />
                                    <FaStar className='gold' />
                                    <FaStar className='gold' />
                                    <FaStar className='gold' />
                                    <FaStar className='gold' />
                                </p>
                                <h4 className='text-success'>Price: {price}</h4>
                                <button className='btn-web'>Buy Now!!</button>
                            </div>
                            <div>
                                <h5>Seller Details</h5>
                                <h6>Seller Name: <span>{name}</span></h6>
                                <h6>Seller Email: <span>{email}</span></h6>
                                <button className='btn-web bg-primary'>Contact Seller</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;