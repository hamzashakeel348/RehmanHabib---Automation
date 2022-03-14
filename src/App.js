import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/scripts/Header";
import Forecast from "./pages/SalesForecast";
import Main from "./pages/Main";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
