import BannerHero from "@/Components/Hero/BannerHero";
import Layout from "@/Layouts/Layout";
import React from "react";
import CarouselCategories from "./CarouselCategories";
import CarouselHome from "./CarouselHome";

import ItemList from "./ItemList";
// modal para cancelar los boletos
const Home = ({ eventsFeacture, eventsFree, eventsCarousel }) => {
    console.log(eventsFeacture)
    return (
        <Layout title="Inicio">
            <BannerHero img="/img/home/banner.jpg"
                title="WELCOME TO ACCOMODATOR"
                desc="Book Rooms anywhere any Time"
            />

            <div className="container">

                <ItemList title="Hotel List" subTitle="Book Now!" linkPath={route("events")}>
                    <ItemList.Grid events={eventsFeacture} />
                </ItemList>

                {/* <ItemList title="Peliculas"
                    linkPath={route("events", { 'categories': ['peliculas'] })} >
                    <CarouselHome eventsCarousel={eventsCarousel} />
                </ItemList> */}

                <ItemList title="Gratis" linkPath={route("events", { 'price': 'free' })}>
                    <ItemList.Grid events={eventsFree} />
                </ItemList>

                <ItemList title="Categorias" linkPath={route("events")}>
                    <CarouselCategories />
                </ItemList>

            </div>

        </Layout >
    );
};

export default Home;
