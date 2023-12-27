import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./index.scss";

const Destination = ({ data }) => {
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);

  // Certifique-se de que data é um array e que activeIndex está dentro dos limites do array
  const selectedData = data.length > 0 ? data[activeIndex] : null;

  return (
    <div className="destination">
      <Header />
      <div className="destination__content">
        <div className="title">
          <span>01</span>
          <h1>PICK YOUR DESTINATION</h1>
        </div>
        <div className="destination__content-planets">
          <img
            src={selectedData && selectedData.imgPath}
            alt=""
            className={activeIndex === 2 ? "special-image" : ""}
          />
          <div className="lis-content">
            <ul>
              {[0, 1, 2, 3].map((index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {data[index].title}
                </li>
              ))}
            </ul>
            {selectedData && (
              <div className="lis-content__planetsInfo">
                <h1>{selectedData.title}</h1>
                <h3>{selectedData.description}</h3>
                <img className="line" src={"/imgsDestination/line.svg"} alt="" />

                <div className="lis-content__travelInfo">
                  <div className="distanceTimeInfo">
                    <p>AVG. DISTANCE</p>
                    <p>{selectedData.distance}</p>
                  </div>
                  <div className="distanceTimeInfo">
                    <p>Est. travel time</p>
                    <p>{selectedData.travelTime}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="destination__content-li"></div>
      </div>
    </div>
  );
};

export default Destination;
