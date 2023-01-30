import React,{useState} from 'react'
import axios from 'axios'
import {
    Card,
    Form,
    Container,
    Row,
    Col
} from "react-bootstrap";
const Product = () => {
    const initialState = {  Product_Name:'', Product_Quality:'', Product_Price:'' };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
   
    const postProduct = async (e) => {
        e.preventDefault()
        console.log(formData)
        const response = await axios.post('http://localhost:5000/addProduct', formData)

       
    }
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Add Product</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={postProduct}>
                                    <Row>
                                        <Col className="px-2" md="6">
                                            <Form.Group>
                                                <label>Product Name</label>
                                                <Form.Control
                                                    placeholder="productName"
                                                    type="text"
                                                    name="Product_Name"
                                                    required
                                                    onChange={handleChange}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>quality</label>
                                                <Form.Control
                                                    required
                                                    placeholder="Quality"
                                                    type="text"
                                                    name="Product_Quality"
                                                    onChange={handleChange}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label htmlFor="exampleInputEmail1">
                                                    Price
                                                </label>
                                                <Form.Control
                                                    placeholder="Price"
                                                    type="number"
                                                    name="Product_Price"
                                                    required
                                                    onChange={handleChange}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <input
                                        style={{
                                            backgroundColor: '#1DC7EA',
                                            color: '#FFFFFF',
                                            opacity: 1,
                                            padding: '10px 20px',
                                            borderRadius: '0.25rem',
                                            margin: '10px',
                                            textAlign: 'center',
                                            border: '1px solid transparent',
                                            borderColor: '#17a2b8',
                                            float: 'left'
                                        }}
                                        type="submit"
                                        value="Add Product"
                                    />
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product