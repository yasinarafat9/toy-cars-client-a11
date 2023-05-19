import './AddAToy.css'

const AddAToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const subcategory = form.subcategory.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const toyImgUrl = form.toyImgUrl.value;
        const description = form.description.value;

        const newAddToy = { name, email, toyName, price, subcategory, rating, quantity, toyImgUrl, description }
        // console.log(addToy)

        // send data to server
        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(newAddToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div>
            <div className='add-toy-container'>
                <form onSubmit={handleAddToy}>
                    <h3 className='text-center'>Add a Toy</h3>
                    <div className='add-toy-dives'>
                        <div>
                            <h5>Seller Name:</h5>
                            <input type="text" name='name' placeholder='Seller Name' />
                        </div>
                        <div>
                            <h5>Seller Email: </h5>
                            <input type="email" name='email' placeholder='Seller Email:' />
                        </div>
                        <div>
                            <h5>Toy Name:</h5>
                            <input type="text" name='toyName' placeholder='Write the Toy Name' />
                        </div>
                        <div>
                            <h5>Price:</h5>
                            <input type="text" name='price' placeholder='Enter the $$price' />
                        </div>

                        <div>
                            {/* TODO Sub Category Dropdown */}
                            <h5>Add Subcategory:</h5>
                            <input type="text" name='subcategory' placeholder='Add Subcategory' />
                        </div>
                        <div>
                            {/* TODO Rating Stars */}
                            <h5>Rating:</h5>
                            <input type="text" name='rating' placeholder='Rating' />
                        </div>
                        <div>
                            <h5>Avaliable Quantity:</h5>
                            <input type="text" name='quantity' placeholder='Avaliable Quantity' />
                        </div>
                        <div>
                            <h5>Toy Image URL:</h5>
                            <input type="text" name='toyImgUrl' placeholder='Paste image Url here' />
                        </div>
                        <div>
                            <h5>Detail Description:</h5>
                            <input type="text" name='description' placeholder='Details Description' className='description-filed' />
                        </div>
                        <div>
                            <button type='submit' className='btn-web mx-auto'>Add To Stock</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;