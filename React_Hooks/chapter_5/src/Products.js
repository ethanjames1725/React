import React from "react";
import Product from "./Product";

function Products() {
    const getProducts = () => {
        return [
            {
                id: 1,
                imageUrl: "https://picsum.photos/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
                rating: 4,
                numOfReviews: 2
            },
            {
                id: 2,
                imageUrl: "https://picsum.photos/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
                rating: 2,
                numOfReviews: 12
            },
            {
                id: 3,
                imageUrl: "https://picsum.photos/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
                rating: 5,
                numOfReviews: 2
            }
        ];
    };

    const products = getProducts();

    const listProducts = products.map((product) =>
        <Product key={product.id} data={product} />
    );

    return (
        <div>
            {listProducts.length > 0 &&
                <div>{listProducts}</div>
            }
            {listProducts.length === 0 &&
                <p>No Products to display</p>
            }
        </div>
    );
}

export default Products;