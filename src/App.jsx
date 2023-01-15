import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter, BrowserRouter as Router, Routes } from 'react-router-dom';
import CustomersList from "./CustomersList";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NavBar from "./NavBar";
import NoMatchPage from "./NoMatchPage";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <div className="container-fluid">
                    <Routes>
                        <Route path="/" element={<Login/>} exact />
                        <Route path="/dashboard" exact element={ <Dashboard/> } />
                        <Route path="/customers" exact element={ <CustomersList/> } />
                        <Route path="/cart" exact element={ <ShoppingCart/> } />
                        <Route path="*" exact element={ <NoMatchPage/> } />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}