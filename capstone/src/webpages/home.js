// file: src/webpages/home.js

import React, {useEffect} from "react";
//import { Link } from "react-router-dom";
import Button from '../components/Button'


const Home = () => {

    useEffect(() => {
        document.title = "Home page"
    })

    return (
        <div style={{textAlign: "center"}}>
            <h1> Welcome to OnlyFactories</h1>
            <p> Make orders and track them. </p>
            <p> This is a senior capstone project from the University of Idaho and allows customers
                to order red, blue, and white disks from a Fischer-Technik Factory located in
                Couer d'Alene, Idaho. 
            </p>
            <p> To start, make an order by clicking on Order. If you have already ordered 
                something and would like to track it, click Track.
            </p>

            <Button />
        </div>
    );
};

export default Home;