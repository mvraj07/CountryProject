import "../../App.css";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container hero-container grid grid-2-cols">
        <div className="hero-content">
          <h1 className="hero-heading">
            Explore the World. One Country at a Time.
          </h1>
          <p className="hero-para">
            explore the world exploretheworld invites you on a visual journey
            around the globe through stunning photography. Discover breathtaking
            landscapes, iconic landmark
          </p>
          <button className="heroButton button">Start Exploring</button>
        </div>
        <figure className="hero-image">
          <img src="/images/world.png" alt="" />
        </figure>
      </div>
    </main>
  );
};
