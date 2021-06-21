import React from "react";

import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Help from "./components/Help";
import AllergenDetail from "./components/AllergenDetail";
import { UserProvider } from "./state/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const title = "React Training";

  return (
    <div className="App">
      <Router>
      <UserProvider>
        <Header title={title} />
        <SubHeader />
        <Switch>
        <Route path="/allergen/:name">
            <AllergenDetail />
          </Route>
          <Route path="/allergen">
            <Content />
          </Route>
          <Route path="/help">
            <Help/>
          </Route>
          <Route path="/">
            <div>
              <h1> Welcome!</h1>
            </div>
          </Route>

        </Switch>
        <Footer />
      </UserProvider>
      </Router>
    </div>
  );
};

export default App;
