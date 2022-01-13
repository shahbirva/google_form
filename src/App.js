import React from "react"
import Header from './components/Header'
import Template from "./components/Template"
import Mainbody from "./components/Mainbody"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formheader from "./components/Formheader";
import Centertabs from "./components/Centertabs"
import Question_form from "./components/Question_form"

const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/form/:id">
        <Formheader/>
        <Centertabs/>
        <Question_form/>
        </Route>
        <Route path="/">
        <Header/>
        <Template/>
        <Mainbody/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
