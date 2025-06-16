import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container } from "react-bootstrap"; // Assuming you use react-bootstrap

function Productdetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (!product) return <div className="text-center mt-5">Product not found</div>;

    return (
        <div>
            <Container className="mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <p className="lead">{product.description}</p>
                        <h4>₹{product.price}</h4>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Rating:</strong> {product.rating} ⭐</p>
                        <button className="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Productdetails;
