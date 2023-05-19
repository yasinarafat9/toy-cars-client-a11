import './UpdateToy.css'

const UpdateToy = () => {

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
                    <div className='add-toy-dives'>
                        <div>
                            <h5>Toy Name:</h5>
                            <input type="text" name='toyName' placeholder='Write the Toy Name' />
                        </div>
                        <div>
                            <h5>Price:</h5>
                            <input type="text" name='price' placeholder='Enter the $$price' />
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
                    <button type='submit' className='btn-web update'>Update</button>

                </form>
            </div>
        </div>
    );
};

export default UpdateToy;