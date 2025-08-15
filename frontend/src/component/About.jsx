import React, { useEffect, useState, useRef } from "react";
import "./about.css";
import aboutImage from '../assets/about.png';

const About = () => {
  const [animate, setAnimate] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const aboutRef = useRef(null);

  // Intersection Observer for scroll animation
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

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    < >
      <div id="about" ref={aboutRef} className={`about-us-container ${animate ? "animate-in" : ""} p-5`}>

        <div className="text-center mb-4">
          <h1 className="text-secondary">About</h1>
          <p className="text-dark">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-md-6 mb-3 mb-md-0 text-center position-relative">
            <img
              src={aboutImage}
              alt="About Us"
              className="img-fluid rounded"
            />
            <button 
              className="play-button" 
              onClick={() => setVideoOpen(true)}
            >
             <i class="fa-solid fa-play"></i>
            </button>
          </div>

          {/* Right Column - Text */}
          <div className="col-md-6 text-start">
            <h2 className="text-secondary">
              Voluptatem dignissimos provident quasi <br /> corporis voluptates sit assumenda.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-success">&#10003;</span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="mb-2">
                <span className="text-success">&#10003;</span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="mb-2">
                <span className="text-success">&#10003;</span> 
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>

            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
  <div className="video-modal">
    <div className="video-backdrop" onClick={() => setVideoOpen(false)}></div>
    
    <div className="video-content">
      {/* Close Button */}
      <button className="video-close" onClick={() => setVideoOpen(false)}>
        &times;
      </button>

      <iframe 
        width="800" 
        height="450" 
        src="https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1" 
        title="Video" 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

    </>
  );
};

export default About;
