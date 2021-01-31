import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

// Authentication
import { useAuth0 } from "@auth0/auth0-react";
import API from '../utils/API';

function BrowseResults (props) {
        const { user } = useAuth0();
        const { sub } = user; 
        let userId = "";

function handleButtonClick(e) { 
        userId = e.target.value;
        console.log(userId);
        console.log(e.target.value);
        API.getUser(e.target.value)
        .then(res => {
                console.log(res.data);
                window.location.pathname = `/profile/${userId}`;          
        })
        .catch(err => console.log(err))
}       console.log(props.data)
        return (

                <div className="smCard d-flex flex-wrap justify-content-center p-0"> 
                        
                {props.data.map(user =>(
                        //conditional statement to exclude the logged in user from the search results. 
                        user._id !== sub ? (

                        <Card className="align-items-center col-xs-9 col-sm-9 col-md-5 col-md-5 col-lg-3 col-xl-3 p-0">
                                <div className="img-container pt-4 ">
                                        <img src={ user.photourl } className="circle" alt={user.name} />
                                </div>
                                <div className="smContent">
                                        <h4 className="mt-2"> {user.firstname} {user.lastname}</h4>
                                        <p>{user.city}, {user.state}</p>
                                        <div className="setStar">
                                        {[...Array(5)].map((star) => {
                                                return ( 
                                                <FaStar />
                                                );
                                        })}
                                        </div>
                                        <p className="mt-3"><strong>Distance able to travel:</strong><br /> {user.traveldist} miles</p>

                                        <div className="border-0 ">
                                                <Card.Body className="skillSet d-flex flex-wrap"> 
                                                {user.skills.map(skill => (
                                                        <span className="mb-2">{skill}</span> 
                                                ))}  
                                                </Card.Body>
                                        </div>
                                </div>
                                <Button className="viewPro" value={user._id} onClick = {handleButtonClick}>Barter</Button>
                        </Card> 

                        ) : null
                ))}

                </div>
        )
}

export default BrowseResults;