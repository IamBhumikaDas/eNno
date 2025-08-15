import React, { useEffect, useRef, useState } from "react";
import "./card.css";

const Card = () => {
  const [animate, setAnimate] = useState([]);
  const cardsRef = useRef([]);

  const cardCount = 3; // total cards

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, cardCount);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setAnimate((prev) => {
              const newArr = [...prev];
              newArr[index] = true;
              return newArr;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className={`col-md-4`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className={`custom-card text-start p-4 ${
                animate[index] ? "animate-in" : ""
              }`}
            >
              {/* Icons */}
              <i
                className={`${
                  index === 0
                    ? "fa-solid fa-wave-square"
                    : index === 1
                    ? "fa-regular fa-calendar"
                    : "fa-regular fa-rectangle-list"
                } icon-style mt-5`}
              ></i>

              <h5 className="text-secondary fw-bold">
                {index === 0
                  ? "Wave Design"
                  : index === 1
                  ? "Square Pattern"
                  : "Calendar Tool"}
              </h5>
              <p className="text-dark">
                {index === 0
                  ? "This is a short description for the first card. It is clean and simple."
                  : index === 1
                  ? "This is a short description for the second card. Elegant and modern."
                  : "This is a short description for the third card. Useful and sleek."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
