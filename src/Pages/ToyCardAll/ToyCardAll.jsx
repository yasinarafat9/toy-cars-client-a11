import './ToyCardAll.css'
import { FaStar } from "react-icons/fa";

const ToyCardAll = ({ toy }) => {
    const { _id, name, email, toyName, price, subcategory, rating, quantity, toyImgUrl, description } = toy;

    return (
        <div className='row'>
            <div className='toy-card'>
                <div className='toy-card-dives'>
                    <img src={toyImgUrl} alt="" />
                    <div className='toy-card-texts'>
                        <h6>{toyName}</h6>
                        <h5 className='text-success'>{price}</h5>
                        <p>Total Ratings: {rating} <FaStar className='gold' />
                            <FaStar className='gold' />
                            <FaStar className='gold' />
                            <FaStar className='gold' />

                            <FaStar className='gold' /></p>

                    </div>
                    <button className='btn-web'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCardAll;