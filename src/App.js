import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/scripts/Header";
import Forecast from "./pages/SalesForecast";
import Main from "./pages/Main";
import Footer from "./components/scripts/Footer";
import ForecastSecond from "./pages/SalesForecastTwo";
import ForecastThird from "./pages/SalesForecastThree";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/PipeLine" component={Home} />
        <Route exact path="/add" component={Edit} />
        <Route exact path="/update/:id" component={Edit} />
        <Route exact path="/updateSales/:id" component={Edit} />
        <Route exact path="/SalesForecast" component={Forecast} />
        <Route exact path="/SalesForecastSecond" component={ForecastSecond} />
        <Route exact path="/SalesForecastThird" component={ForecastThird} />

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
