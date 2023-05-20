import { useLoaderData } from 'react-router-dom';
import './UpdateToy.css'

const UpdateToy = () => {

    const toy = useLoaderData();
    const { _id, name, email, toyName, price, subcategory, rating, quantity, toyImgUrl, description } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = { toyName, price, quantity, description }
        console.log(updateToy)
    }




    return (
        <div>
            <div className='add-toy-container'>
                <form onSubmit={handleUpdateToy} className='form-update'>
                    <h3 className='text-center'>Update Your Toy</h3>
                    <br />
                    <div className='toy-img-div'>
                        <img src={toyImgUrl} alt="" />
                        <div>
                            <h6>Current Name: {toyName}</h6>
                            <h6>Current Price: {price}</h6>
                            <h6>Current Quantity: {quantity}</h6>
                            {/* <small>Toy Description: {description}</small> */}

                        </div>
                    </div>
                    <br />
                    <div className='add-toy-dives'>
                        <div>
                            <h5>Update Toy Name:</h5>
                            <input type="text" name='toyName' placeholder='Update the Toy Name' />
                        </div>
                        <div>
                            <h5><span className='text-primary'>Current Price: {price}</span></h5>
                            <input type="text" name='price' placeholder='Update the $$price' />
                        </div>
                        <div>
                            <h5>Avaliable Quantity:</h5>
                            <input type="text" name='quantity' placeholder='Avaliable Quantity' />
                        </div>
                        <div>
                            <h5>Detail Description:</h5>
                            <input type="text" name='description' placeholder='Details Description' className='description-filed' />
                        </div>

                    </div>
                    <div className='update'>
                    <button type='submit' className='btn-web update'>Update</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateToy;