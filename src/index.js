/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/pages/LoginPage.js";
import LandingPage from "views/pages/CustomLandingPage.js";
import ProfilePage from "views/pages/ProfilePage.js";
import SolutionsPage from "views/pages/SolutionsPage.js";
import TechsPage from "views/pages/TechsPage.js";
import WorkPage from "views/pages/WorkPage.js";
import PortfolioPage from "views/pages/PortfolioPage.js";
import TeamPage from "views/pages/TeamPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        {/* Custom routes (não sei se é o jeito mais correto de fazer) */}
        <Route 
          path="/solucoes"
          component={SolutionsPage}
        />
        <Route 
          path="/tecnologias"
          component={TechsPage}
        />
        <Route 
          path="/metodologias"
          component={WorkPage}
        />
        <Route 
          path="/portfolio"
          component={PortfolioPage}
        />
        <Route 
          path="/equipe"
          component={TeamPage}
        />
        {/* End custom routes */}

        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
