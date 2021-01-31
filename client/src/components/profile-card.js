import React from "react";

//Bootstrap Elements
import Card from 'react-bootstrap/Card'

//Rating
import StarRating from '../components/user-rating';

export default function ProfileCard (props) {

    return(
    <>
        <Card className="profile border-0">
            <img src= { props.picture } alt={props.firstName} className="profCircle" />
            <Card.Body>
                <Card.Title>{ props.firstName } {props.lastName}</Card.Title>
                <Card.Text><p>{props.city}, {props.state}</p></Card.Text>
                <StarRating />
                <Card.Text className="mt-3"><p><strong>Distance able to travel:</strong> {props.traveldist} miles</p></Card.Text>
            </Card.Body>
        </Card>
    </>
    )
}