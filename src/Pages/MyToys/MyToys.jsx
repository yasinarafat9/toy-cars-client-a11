import { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../Providers/AuthProvider';

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
            <h2>toys count : {toys.length}</h2>
        </div>
    );
};

export default MyToys;