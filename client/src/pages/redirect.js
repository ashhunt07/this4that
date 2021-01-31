import React, { useEffect } from 'react';
import Loading from "../components/Loading";
//Auth and Db 
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

export default function Redirect() {
        const { user } = useAuth0();
        const { email, sub, given_name, family_name, picture } = user;
        useEffect(() => {
                API.getUser(sub)
                        .then(res => {
                                if (!res.data) {
                                        API.saveUser({
                                                _id: sub,
                                                firstname: given_name,
                                                lastname: family_name,
                                                email: email,
                                                picurl: picture,
                                                reviews: ["There's nothing here! Leave a review!"]
                                        })
                                                .then(window.location.pathname = "/profile-edit")
                                                .catch(err => console.log(err));
                                } else {
                                        window.location.pathname = `/profile/${sub}`;
                                }
                        }
                        )
                        .catch(err => console.log(err))
        }, []);

        return (
                <Loading />
        )
}
