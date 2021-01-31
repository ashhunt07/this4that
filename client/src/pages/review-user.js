import React, { useEffect, useState } from "react";
import {useParams} from 'react-router';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

//Auth and Db 
import API from "../utils/API";

// Components
import NavBar from '../components/nav-bar';
import StarRating from '../components/user-rating';


export default function ReviewUser () {
        const {id} = useParams();
        let reviewArray = [];
        const [userData, setUserData] = useState({});
        const [formObject, setFormObject] = useState({});

        function handleFormSubmit(event) {   
                // sets reviewArray to the db's current reviews array
                reviewArray = userData.reviews;
                //pushes in the new review
                if (reviewArray.includes("There's nothing here! Leave a review!")) {
                        reviewArray = formObject.reviews;
                } else {
                        reviewArray.push(formObject.reviews);   
                }
                
                event.preventDefault(); 
                //sends back the new array of reviews to replace the old one 
                API.updateUser(id,{
                reviews: reviewArray,
                })
                .then( window.location.pathname = `/profile/${id}`)
                .catch(err => console.log(err));    
        };

        function handleInputChange(event) {
                const { name, value } = event.target;
                setFormObject({...formObject, [name]: value})
        };

        useEffect(() => {
                API.getUser(id)
                .then(res => {
                        setUserData(res.data);
                })
        },[id])
        
        console.log(userData)

        return(
                
                <>
                <NavBar />
                <div className="submitReview">
                        <Container className="pt-5">
                                <Form className="edit-form mx-auto">

                                <Form.Group controlId="username">
                                        <h4>How did {userData.firstname} do?</h4>
                                </Form.Group>
                                
                                <Form.Group controlId="userreview">
                                        
                                        <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        placeholder={`Tell us a little about your experience with ${userData.firstname} ${userData.lastname}...`} 
                                        name="reviews"
                                        onChange={handleInputChange}/>
                                </Form.Group>
                                                                
                                <Form.Group 
                                controlId="starrating" 
                                className="mb-3">
                                        <StarRating />
                                </Form.Group>

                                <Button 
                                        variant="primary" 
                                        type="submit" 
                                        className="mt-3" 
                                        onClick={handleFormSubmit} 
                                        >
                                        Submit
                                </Button>
                                </Form>
                        </Container>
                </div>
                </>
                )
}