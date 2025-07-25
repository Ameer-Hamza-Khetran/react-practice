import React from "react";
import { Header, Footer, Home } from "./Components";
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
