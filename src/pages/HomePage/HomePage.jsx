import React, { useEffect } from "react";

import Intro from "../../compositions/Intro/Intro";
import Chapter from "../../compositions/Chapter/Chapter";
import Author from "../../compositions/Author/Author";
import Reviews from "../../compositions/Reviews/Reviews";
import DisqusChat from "../../components/DisqusChat/DisqusChat";

const Homepage = () => {
  return (
    <>
      <Intro />
      <Chapter />
      <DisqusChat />
      <Author />

      <Reviews />
    </>
  );
};

export default Homepage;
