import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import RepresentativeSearch from "./Components/RepresentativeSearch";
import './App.css'
import SignUp from "./Components/SignUp";

function App() {
  return (
      <Router>
        <div>
          <Header />
          <div>
              <Switch>
                  <Route path="/signup">
                      <SignUp />
                  </Route>
                  <Route path="/">
                    <RepresentativeSearch/>
                  </Route>
              </Switch>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
