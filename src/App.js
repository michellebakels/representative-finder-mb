import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import RepresentativeSearch from "./Components/RepresentativeSearch";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import './App.css'

function App() {

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        if (user !== undefined) {
            fetch(`https://representative-finder-mb-api.web.app/users/${user?.email}`)
                .then(response => response.json())
                .then(json => console.log('user json -->', json))
                .catch(error => alert(error))
        }
    },[user])

  return (
      <Router>
        <div>
          <Header setUser={setUser} />
          <div>
              <Switch>
                  <Route path="/signin">
                      <SignIn setUser={setUser}/>
                  </Route>
                  <Route path="/signup">
                      <SignUp setUser={setUser} />
                  </Route>
                  <Route path="/search">
                    <RepresentativeSearch/>
                  </Route>
                  <Route path="/user-profile">
                      <UserProfile user={user} />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
              </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
