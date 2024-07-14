import React from "react";
import { Link, useActionData, useLoaderData } from "react-router-dom";
import "./Home.css";
import { NavLinks } from "../../services/navLinks";
import Banner from "./banner/Banner";
import Recommended from "./recommended/Recommended";
import AdBanner from "./adBanner/AdBanner";
import UpComing from "./upcoming/UpComing";

const Home = () => {

  return (
    <main>
      <section className="bg-gray-200">

      </section>
      <Banner />
      <Recommended/>
      <AdBanner />
      <UpComing />
    </main>
  );
};

export default Home;
