import {NavLink} from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const MainNav = () => {
    const {user} = useAuth0();
    const {sub} = user;

  // update classnames for styling---please do not edit wrapping code--it will break user authentication
  // if you need to add a route for a new page copy and paste one of the navlinks below  and change the to="/your-new-path" 
  // Then go to App.js and copy and paste a ProtectedRoute and edit the new route there.
  return (
    <div className="navbar-nav">
    <NavLink
      to="/browse"
      exact
      className="navLink"
      activeClassName="router-link-exact-active"
    >
    Browse
    </NavLink>
    
    <NavLink
      to={`/profile/${sub}`}
      exact
      className="navLink"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
  </div>
  )

};

export default MainNav;
