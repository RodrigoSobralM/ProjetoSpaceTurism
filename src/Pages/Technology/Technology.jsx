import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./index.scss";

const Technology = ({ data }) => {
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedData = data.length > 0 ? data[activeIndex] : null;
  return (
    <div className="technology">
      <Header />
      <div className="technology__title">
        <span>03</span>
        <h1>SPACE LAUNCH 101</h1>
      </div>
      <div className="technology__lis-content">
        <div className="infoLis">
          <ul>
            {[0, 1, 2].map((index) => (
              <li
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {data[index].id}
              </li>
            ))}
          </ul>
          {selectedData && (
            <div className="infoLis__text">
              <h2>{selectedData.paragraph}</h2>
              <h1>{selectedData.title}</h1>
              <h3>{selectedData.description}</h3>
            </div>
          )}
        </div>
        <img
          src={selectedData && selectedData.imgPath}
          alt=""
          className={
            activeIndex === 0
              ? "image-0"
              : activeIndex === 1
              ? "image-1"
              : activeIndex === 2
              ? "image-2"
              : activeIndex === 3
              ? "image-4"
              : ""
          }
        />
      </div>
    </div>
  );
};

export default Technology;
