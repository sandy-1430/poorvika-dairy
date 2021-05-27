import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Home from "./screens/Home";
import User from "./User";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productlist from "./screens/productlist";
import Productdetails from "./screens/Productdetails";
import Cartscreen from "./screens/Cartscreen";
import Story from "./screens/Story";
import Subscription from "./screens/Subscription";
import Location from "./screens/Location";
import Verification from "./screens/Verification";
import Deliverydate from "./screens/Deliverydate";
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/product/:id" component={Productdetails}></Route>
          <Route path="/cart" component={Cartscreen}></Route>
          <Route path="/product" component={Productlist}></Route>
          <Route path="/date" component={Deliverydate}></Route>
          <Route path="/story" component={Story}></Route>
          <Route path="/location" component={Location}></Route>
          <Route path="/verify" component={Verification}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/subscribe" component={Subscription}></Route>
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
