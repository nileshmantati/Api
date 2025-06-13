import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { name } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`https://dummyjson.com/products/category/${name}`)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [name]);
    return (
        <div>
            <Container className="mt-4">
                <h3 className="mb-4 text-capitalize">{name} Products</h3>
                {loading && (
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                        <p>Loading...</p>
                    </div>
                )}
                {!loading && products.length === 0 && <p>No products found in this category.</p>}
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={product.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Products
