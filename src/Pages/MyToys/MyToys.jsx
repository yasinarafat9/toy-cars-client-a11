import { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../Providers/AuthProvider';
import CardMyToys from '../CardMyToys/CardMyToys';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    
    const url = `http://localhost:5000/addToy?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    return (
        <div>
            {
                toys.map(toy => <CardMyToys
                key={toy._id}
                toy={toy}
                ></CardMyToys>)
            }
        </div>
    );
};

export default MyToys;