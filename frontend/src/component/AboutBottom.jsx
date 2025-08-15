import React, { useEffect, useRef, useState } from "react";
import "./aboutBottom.css";

const AboutBottom = () => {
  const aboutRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Counters
  const countersData = [
    { start: 0, end: 232, text: "Clients" },
    { start: 0, end: 521, text: "Projects" },
    { start: 0, end: 1453, text: "Hours Of Support" },
    { start: 0, end: 32, text: "Workers" },
  ];

  const [counters, setCounters] = useState(
    countersData.map((c) => c.start)
  );

  // Intersection Observer to trigger animation
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

  // Counter animation
  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, i) => {
          if (val < countersData[i].end) {
            const increment = Math.ceil((countersData[i].end - countersData[i].start) / 50);
            return Math.min(val + increment, countersData[i].end);
          }
          return val;
        })
      );
    }, 20); // roughly 1 second animation

    return () => clearInterval(interval);
  }, [animate]);

  return (
    <div ref={aboutRef} className={`about-bottom-container ${animate ? "animate-in" : ""} py-5`}>
      <div className="container">
       <div className="row text-center">
  {countersData.map((item, index) => (
    <div key={index} className="col-12 col-md-3 mb-4">
      <h1 className="text-success display-4">{counters[index]}</h1>
      <p className="text-success">{item.text}</p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default AboutBottom;
