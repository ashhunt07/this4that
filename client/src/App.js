//CSS
import './App.css';

//import react
import React from "react";
import { Route, Switch} from "react-router-dom";

//importing componenets
import Loading from "./components/Loading";
// import Footer from "./components/footer";

// new pages can be exported in pages/index.js and added below 
import { Home, Browse, Profile, ProfileEdit, Redirect, ReviewUser } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100 page-container">
      <div className="flex-grow-1 content-wrap">
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/redirect" component={Redirect} />
            <ProtectedRoute path="/browse" component={Browse} />
            <ProtectedRoute path="/profile/:id" component={Profile} />
            <ProtectedRoute path="/profile-edit" component={ProfileEdit} />
            <ProtectedRoute path="/review-user/:id" component={ReviewUser} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;

