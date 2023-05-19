import { useEffect, useState } from 'react';
import './AllToys.css'
import ToyCardAll from '../ToyCardAll/ToyCardAll';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/addToy')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])
    console.log(toys)

    return (
        <div className='my-2 all-toys-container'>
            {
                toys.map(toy => <ToyCardAll
                key={toy._id}
                toy = {toy}
                ></ToyCardAll>)
            }
        </div>
    );
};

export default AllToys;