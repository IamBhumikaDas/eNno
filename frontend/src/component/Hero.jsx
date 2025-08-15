import React, { useState, useEffect, useRef } from "react";
import "./hero.css";
import heroImage from "../assets/hero-img.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [animate, setAnimate] = useState(false);
  const heroRef = useRef(null);

  // Trigger animation when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="container py-5 hero-section">
      <div className="row align-items-center">

        {/* Right Column (Image) */}
        <div className={`col-md-6 text-center mt-4 mt-md-0 order-1 order-md-2 hero-col ${animate ? "animate-in" : ""}`}>
          <img
            src={heroImage}
            alt="Hero"
            className="img-fluid hero-float"
          />
        </div>

        {/* Left Column (Text) */}
        <div className={`col-md-6 text-center text-md-start order-2 order-md-1 hero-col ${animate ? "animate-in" : ""}`}>
          <h1 className="fw-bold text-secondary display-4">
            Elegant and creative <br /> solutions
          </h1>
          <p className="text-muted mt-3 fs-5">
            We are team of talented designers making websites with Bootstrap
          </p>

          {/* Buttons */}
          <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
            <button className="btn btn-success rounded-pill px-4 py-2">
              Get Started
            </button>
            <button
              className="btn btn-outline-success rounded-pill px-4 d-flex align-items-center gap-2"
              onClick={() => setShowVideo(true)}
            >
              <i className="fa-solid fa-play"></i>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-overlay" onClick={() => setShowVideo(false)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
