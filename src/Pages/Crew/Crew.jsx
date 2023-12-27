import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./index.scss";

const Crew = ({ data }) => {
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedData = data.length > 0 ? data[activeIndex] : null;

  return (
    <div className="crew">
      <Header />
      <div className="title">
        <span>02</span>
        <h1>MEET YOUR CREW</h1>
      </div>
      <div className="crew__content">
        <div className="lis-content">
          {selectedData && (
            <div className="lis-content__peopleInfo">
              <h2>{selectedData.cargo}</h2>
              <h1>{selectedData.nome}</h1>
              <h3>{selectedData.descricao}</h3>
            </div>
          )}
          <ul>
            {[0, 1, 2, 3].map((index) => (
              <li
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              ></li>
            ))}
          </ul>
        </div>
        <div className="foto">
          <img
            src={selectedData && selectedData.imgPath}
            alt=""
            className={activeIndex === 3 ? "special-image" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
