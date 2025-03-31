import React from "react";

import Intro from "../../compositions/Intro/Intro";
import Chapter from "../../compositions/Chapter/Chapter";
import Author from "../../compositions/Author/Author";
import Reviews from "../../compositions/Reviews/Reviews";

const Homepage = () => {
  return (
    <>
      <Intro />
      <Chapter />
      <Author />

      <Reviews />
    </>
  );
};

export default Homepage;
