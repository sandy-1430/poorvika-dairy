import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Home from "./screens/Home";
import User from "./screens/User";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productlist from "./screens/productlist";
import Productdetails from "./screens/Productdetails";
import Cartscreen from "./screens/Cartscreen";
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
