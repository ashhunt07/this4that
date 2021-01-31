import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import {useParams} from 'react-router';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//components
import NavBar from "../components/nav-bar";
import ProfileCard from '../components/profile-card'
import ReviewSlider from '../components/review-slider';
import Footer from '../components/footer'

//Db 
import API from "../utils/API";

// icons
import { FaPen } from "react-icons/fa";


export default function User () {
        const {id} = useParams();
        const [userData, setUserData] = useState({});
        const [skillList, setSkillList] = useState([]);

        useEffect(() => {
        API.getUser(id)
        .then(res => {
                setUserData(res.data);
                setSkillList(res.data.skills);
        })
},[])

        return(
                <>
                <NavBar />
                <div className="userInfo">
                <Container>
                        <div className="profileCard mb-5 px-3">
                                <Row className="justify-content-end mr-4">
                                        <NavLink
                                        to="/profile-edit"
                                        exact
                                        className="edit"
                                        activeClassName="router-link-exact-active"
                                        >
                                        < FaPen size={15} />&ensp;Edit Profile
                                        </NavLink>
                                </Row>
                                <Row>
                                        <Col md="5">
                                                <ProfileCard city={userData.city} state={userData.state} firstName={userData.firstname} lastName={userData.lastname} picture={userData.photourl} bio={userData.bio} traveldist={userData.traveldist}/>
                                        </Col>
                                        <Col md="6">
                                        <Card className="border-0">

                                                <Card.Text className="mt-4">
                                                        <h5>Bio</h5>
                                                        <p>
                                                        {userData.bio}
                                                        </p>
                                                </Card.Text>

                                                <Card.Text className="skillSet d-flex flex-wrap">
                                                        <Row className="col-12">
                                                                <h5>Skills</h5>
                                                        </Row>
                                                        <Row className="pl-3">
                                                                {skillList.map((skill,i) => (
                                                                        <span className="mb-2" key={i}>{skill}</span>
                                                                ))}
                                                        </Row>
                                                </Card.Text>

                                        </Card>

                                        </Col>
                                </Row>
                                <Row>
                                        <Footer paypaluser={userData.paypaluser} id={userData._id}/>   
                                
                                </Row>
                        </div>
                        
                        <Row className="profRev">
                                <h4 className="mt-3 pb-2 mx-auto">Reviews</h4>
                                <ReviewSlider id={userData.id} reviews={userData.reviews}/>
                        </Row>
                </Container>
                </div>
                </>
        )
        
}

