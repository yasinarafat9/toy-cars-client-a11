import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toy = useLoaderData();
    const { _id, name, email, toyName, price, subcategory, rating, quantity, toyImgUrl, description } = toy;
    return (
        <div>
            <h2>{toyName}</h2>
        </div>
    );
};

export default ViewDetails;