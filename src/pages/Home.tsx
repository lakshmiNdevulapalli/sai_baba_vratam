import React from "react";
import "../App.css";

// Import the images
import saiBabaLarge from "../assets/sai-baba-large.jpeg";
import saiBabaMedium from "../assets/sai-baba-medium.jpeg";
import saiBabaSmall from "../assets/sai-baba-small.jpeg";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sai Baba Sanctum</title>
      </Helmet>
      {/* Decorative Elements */}
      <div className="decorative-side left"></div>
      <div className="decorative-side right"></div>
      {/* Hero Section with Image */}
      <div className="hero">
        <img
          src={saiBabaLarge} // Fallback if `srcset` isn't supported
          srcSet={`
            ${saiBabaSmall} 400w,
            ${saiBabaMedium} 800w,
            ${saiBabaLarge} 1200w
          `}
          sizes="(max-width: 600px) 400px, (max-width: 900px) 500px, 1200px"
          alt="Sai Baba"
          className="hero-image"
        />
      </div>

      <div className="content">
        <h1 className="hero-title">
          Welcome to the Sanctum of Shri Shirdi Sai Baba
        </h1>
        <p className="spiritual-quote">
          "With firm faith and patience, all trials can be overcome, and your
          prayers will be answered."
        </p>
      </div>
    </div>
  );
};

export default Home;
