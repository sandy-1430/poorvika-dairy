import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Home from "./screens/Home";
import User from "./screens/User";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productlist from "./screens/productlist";
import Productdetails from "./screens/Productdetails";
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/product">
            <Productlist></Productlist>
          </Route>
          <Route path="/productdetail">
            <Productdetails />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
