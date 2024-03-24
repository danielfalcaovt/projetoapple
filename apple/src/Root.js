import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Fragment } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Root() {
    return(
        <Fragment>
            <Header />
            <Nav />
            <Outlet/>
            <Footer />
        </Fragment>
    )
}