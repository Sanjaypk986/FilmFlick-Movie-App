import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { NavLinks } from "../../services/navLinks";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <main>
      <section className="bg-gray-200">
        <nav className="container mx-auto py-3">
          <ul className="flex justify-start sm:justify-center items-center gap-5 text-gray-600 overflow-x-auto whitespace-nowrap no-scrollbar px-4">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.genre}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <Banner />
    </main>
  );
};

export default Home;
