// file: src/webpages/index.js

import React from "react";
import Header from '../components/Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './home';
import OrderPage from "./ordering";
import Tracking from "./tracking";
import About from "./about";
import Management from "./management";

const Webpages = () => {
    return(
        <Home />
    );
};

export default Webpages;