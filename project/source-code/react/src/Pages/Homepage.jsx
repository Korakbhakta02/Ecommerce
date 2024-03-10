import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../data/Saree/page1";
import { dressPage1 } from "../data/dress/page1";
import { gounsPage1 } from "../data/Gouns/gouns";
import { kurtaPage1 } from "../data/Kurta/kurta";
import { mensShoesPage1 } from "../data/shoes";
import { mens_kurta } from "../data/Men/men_kurta";
import { lengha_page1 } from "../data/Women/LenghaCholi";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
