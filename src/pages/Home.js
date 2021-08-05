import React from "react";
import Bottomsection from "../components/Bottomsection";
import CardCarousel from "../components/Carousel";
import TopSection from "../components/Topsection";

export const Home = () => {
  return (
    <div>
        <TopSection />
        <CardCarousel />
        <Bottomsection />
    </div>
  );
};
