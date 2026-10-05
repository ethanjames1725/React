import React from 'react';
import Rating from './Rating';

const Product = (props) => {
    return (
        <div className="d-flex mb-3">
            <img
                width={64}
                height={64}
                className="me-3"
                src={props.data.imageUrl}
                alt="Product"
            />
            <div>
                <h5>{props.data.productName}</h5>
                {props.data.releasedDate}
                <Rating
                    rating={props.data.rating}
                    numOfReviews={props.data.numOfReviews}
                />
                <p>{props.data.description}</p>
            </div>
        </div>
    );
};

export default Product;