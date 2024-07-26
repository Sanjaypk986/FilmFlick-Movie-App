import React from "react";
import "./Home.css";
import Banner from "./banner/Banner";
import Recommended from "./recommended/Recommended";
import AdBanner from "./adBanner/AdBanner";
import UpComing from "./upcoming/UpComing";
import LiveEvent from "./liveEvents/LiveEvent";
import Premiere from "./premiere/Premiere";

const Home = () => {
  return (
    <main>
      <Banner />
      <Recommended />
      <AdBanner />
      <LiveEvent />
      <Premiere />

      <section className="">
        <div className="container mx-auto px-2 mt-3 py-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold pb-4">
            Upcoming Movies
          </h3>
          <UpComing />
        </div>
      </section>
    </main>
  );
};

export default Home;
