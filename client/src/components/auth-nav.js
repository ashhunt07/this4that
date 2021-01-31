// src/components/auth-nav.js

import React from "react";
import AuthenticationButton from "./authentication-button";

const AuthNav = () => (
  // Update classname for styling -- please do not delete wrapping code it will break user auth 
  <div className=" ml-3">
    <AuthenticationButton />
  </div>
);

export default AuthNav;