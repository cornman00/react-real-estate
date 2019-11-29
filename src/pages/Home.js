import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FeaturedHouse from "../components/FeaturedHouse";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Chicago Real Estate" subtitle="Your Dream Houses">
          <Link to="/rooms" className="btn-primary">
            our Houses
          </Link>
        </Banner>
      </Hero>
      <FeaturedHouse />
    </React.Fragment>
  );
}
