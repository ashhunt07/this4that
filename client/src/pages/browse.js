import React, { useState, useEffect} from 'react';
// Import Components
import NavBar from '../components/nav-bar';
import Search from '../components/nav-search';

//Bootstrap
import Container from 'react-bootstrap/Container';
import API from '../utils/API';


import BrowseResults from '../components/browseresults';

export default function Browse () {
        const [userData, setUserData] = useState([]);
        const [data,setData] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");

        // gets a list of all users from the db 
        useEffect(() => {
                API.getUsers()
                .then(res => {
                        setUserData(res.data);     
                        setData(res.data);    
                })
                .catch(err => console.log(err))
                
        },[])


        useEffect(() => {
                if(userData !== []) {
                        console.log(searchTerm);
                        console.log(data);
                        const results = userData.filter(user => 
                                user.skills.join("").includes(searchTerm) );   
                                console.log(results);
                                setData(results);  
                }
                
        }, [searchTerm]);
        

        const handleChange = e => {
                setSearchTerm(e.target.value);
                console.log(searchTerm);
        }


        return (
                <>
                <NavBar />
                <div className="proEdit">
                <Container className="pt-4">
                        <div className ="searchBar mb-3">
                        <Search        
                        value={searchTerm}
                        onChange={handleChange}/>
                        </div>
                <BrowseResults data={data}/>
                </Container>
                </div>
                </>
        );
};