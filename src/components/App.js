import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//We are using Switch to prevent NotFoundPage being showed on every page
//When we have Switch, only the one component can be shown at the time

//Redirect is useful when we are changing URLs over time (for example from "about-page" to "about")

function App() {
    return (
        <div>
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Redirect from="about-page" to="about" />
                <Route component={NotFoundPage} /> 
            </Switch>
        </div>
    );
    
}

export default App;