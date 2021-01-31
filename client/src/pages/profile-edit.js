import React, { useState, useEffect } from "react";
//Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Auth and Db 
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";


// Components
import NavBar from '../components/nav-bar';


export default function ProfileEdit () {

        // pulls in user info returned from Auth0 to pass to db 
        const { user } = useAuth0();
        const { picture, sub} = user;
        const [userData,setUserData] = useState({});
        //user info typed into form to pass to db
        const [formObject, setFormObject] = useState({});

        

        //call to db to get info for display on this page. 
        useEffect(() => {
                API.getUser(sub)
                .then(res => {
                        setUserData(res.data);
                        console.log(userData)
                })
        },[])


        // Updates the user in the database with form data. 
        // routes back to profile.js
        function handleFormSubmit(event) {   
                event.preventDefault();  
                API.updateUser(sub,{
                city: formObject.city,
                state: formObject.state,
                traveldist: formObject.traveldist,
                paypaluser: formObject.paypaluser,
                phone: formObject.phone,
                bio: formObject.bio,
                skills: skill,
                photourl: picture,
                })
                .then( window.location.pathname = `/profile/${sub}` )
                .catch(err => console.log(err));  
                localStorage.setItem(event.target.name, event.target.value); 
                
        };

          // Handles updating component state when the user types into the input field
        function handleInputChange(event) {
                const { name, value } = event.target;
                setFormObject({...formObject, [name]: value})
                localStorage.setItem(event.target.name, event.target.value); 
        };


        //state for the skills section 
        const [skill, setSkill] = useState([]);
        const removeSkill = indexToRemove => {
                setSkill([...skill.filter((_, index) => index !== indexToRemove)]);
        };
        const addSkill = event => {
                if (event.target.value !== "") {
                        setSkill([...skill, event.target.value]);
                event.target.value = "";
                event.preventDefault();
                }
        };
        

        return(
                // path needs to be changed to /profile/:id once you figure that out 
                <>
                <NavBar />
                <div className="proEdit">
                        <Container className="pt-5">
                                <Form className="edit-form mx-auto">
                                <img src= { userData.photourl } alt={userData.name} className="rounded-circle img-fluid mb-2" />
                                <h2>{ userData.firstname} {userData.lastname}</h2>
                                <h6 className="mb-5">{userData.email}</h6>
                                <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="formPhoto">
                                                <div className="mb-3">
                                                <Form.File id="formcheck-api-regular">
                                                <Form.Label>Profile Picture</Form.Label>
                                                <Form.File.Input />
                                                </Form.File>
                                                </div>
                                        </Form.Group> 
                                </Form.Row>

                                <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="formPayPal">
                                        <Form.Label>PayPal UserName</Form.Label>
                                                <Form.Control  type="text" placeholder="User Name" value={localStorage.getItem(userData.paypaluser)} name="paypaluser" onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="formPhoneNumber">
                                        <Form.Label>Phone</Form.Label>
                                                <Form.Control type="text" placeholder="Phone Number" value={localStorage.getItem(userData.phone)} name="phone" onChange={handleInputChange}/>
                                        </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" value={localStorage.getItem(userData.city)} name="city" onChange={handleInputChange} placeholder="City" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" type="dropdown" defaultValue="Choose..." value={localStorage.getItem(userData.state)} name="state" onChange={handleInputChange}>
                                                <option>Choose...</option>
                                                <option value="">N/A</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DC">District of Columbia</option>
                                                <option value="DE">Delaware</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="IA">Iowa</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MD">Maryland</option>
                                                <option value="ME">Maine</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MT">Montana</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NY">New York</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VA">Virginia</option>
                                                <option value="VT">Vermont</option>
                                                <option value="WA">Washington</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WY">Wyoming</option>
                                        </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="formTravelDist">
                                        <Form.Label>Travel Distance</Form.Label>
                                        <Form.Control type="text" placeholder="Distance" value={localStorage.getItem(userData.traveldist)} name="traveldist" onChange={handleInputChange} />
                                        </Form.Group>
                                </Form.Row>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Bio</Form.Label>
                                        <Form.Control as="textarea" type="bio" rows={3} placeholder="Tell us a little about you..." value={localStorage.getItem(userData.bio)} name="bio" onChange={handleInputChange} />
                                        </Form.Group>

                                        <Form.Label>Barter Skills</Form.Label>         

                                        <div className="skill-input">
                                                <ul id="skill">
                                                        {skill.map((skills, index) => (
                                                        <li key={index} className="skill">
                                                        <span className='skill-title'>{skills}</span>
                                                        <span className='skill-close-icon'onClick={() => removeSkill(index)}>
                                                                x
                                                        </span>
                                                        </li>
                                                ))}
                                                </ul>
                                                <input
                                                        type="text"
                                                        onKeyDown={event => event.key === "Enter" ? addSkill(event) : null}
                                                        placeholder="Enter Skill and Press Enter"
                                                />
		                        </div>

                                <Button variant="primary" type="submit" className="mt-3" onClick={handleFormSubmit} >
                                        Submit
                                </Button>
                        </Form>
                        </Container>
                </div>
                </>
                )
}