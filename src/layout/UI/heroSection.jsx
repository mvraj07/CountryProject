import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1>Explore the World. One Country at a Time</h1>
          <p>
            Discover the Beauty, Culture and History of every nation. Sort,
            Search and Filter through countries to find the details you need.
          </p>
          <button>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src="./images/heroImage.webp" alt="" />
        </div>
      </div>
    </main>
  );
};
