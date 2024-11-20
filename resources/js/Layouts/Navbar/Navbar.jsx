import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MovileNavbar from "./MovileNavbar/MovileNavbar";

const Navbar = () => {
    let navigation = [
        // {
        //     title: "Inicio",
        //     path: route("home"),
        //     current: route().current("home"),
        // },

        {
            title: "House",
            path: route("events", { categories: ["House"] }),
            current: route().current("events"),
            hidenMovil: true,
        },

        {
            title: "Resorts",
            path: route("events", { categories: ["Resorts"] }),
            current: route().current("events"),
            hidenMovil: true,
        },

        {
            title: "Appartments",
            path: route("events", { categories: ["Appartments"] }),
            current: route().current("events"),
            hidenMovil: true,
        },

        {
            title: "About Us",
            path: route("about_us"),
            current: route().current("about_us"),
        },
        {
            title: "Contact Us",
            path: route("contact_us"),
            current: route().current("contact_us"),
        },
    ];
    return (
        <>
            <MovileNavbar navigation={navigation} />
            <DesktopNavbar navigation={navigation} />
        </>
    );
};

export default Navbar;
