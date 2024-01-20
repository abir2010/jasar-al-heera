import React, { useEffect } from "react";

import "../css/style.css";
import BlogSection from "../partials/BlogSection";
import Faq from "../partials/Faq";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Footer from "../partials/Footer";
import Gallery from "../partials/Gallery";
import HeaderSecondary from "../partials/HeaderSecondary";
import HeroHome from "../partials/HeroHome";
import Newsletter from "../partials/Newsletter";
import Testimonials from "../partials/Testimonials";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <HeaderSecondary />

      <main className="flex-grow">
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Faq />
        <BlogSection />
        <Gallery />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
