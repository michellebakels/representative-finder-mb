import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import RepresentativeSearch from "./Components/RepresentativeSearch";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import './App.css'

function App() {
  return (
      <Router>
        <div>
          <Header />
          <div>
              <Switch>
                  <Route path="/signin">
                      <SignIn />
                  </Route>
                  <Route path="/signup">
                      <SignUp />
                  </Route>
                  <Route path="/search">
                    <RepresentativeSearch/>
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
