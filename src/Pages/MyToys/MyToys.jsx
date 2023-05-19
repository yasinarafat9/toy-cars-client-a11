import { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../Providers/AuthProvider';
import CardMyToys from '../CardMyToys/CardMyToys';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/addToy?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to Delete?');
        if (proceed) {
            fetch(`http://localhost:5000/addToy/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted Successfully')
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {
                toys.map(toy => <CardMyToys
                    key={toy._id}
                    toy={toy}
                    handleDelete = {handleDelete}
                ></CardMyToys>)
            }
        </div>
    );
};

export default MyToys;