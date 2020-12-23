import React from "react";
import "./AuthLogin.css";

const Hero = ({ handleLogout, user }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="CodeBook"></div>
    </section>
  );
};
export default Hero;
