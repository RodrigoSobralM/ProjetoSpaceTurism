import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const Header = () => {
  const location = useLocation();
  const [isActiveIndexLi, setIsActiveLi] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;

    const pageMappings = {
      "/": 0,
      "/destination": 1,
      "/crew": 2,
      "/technology": 3,
    };

    setIsActiveLi(pageMappings[currentPath] || 0);
  }, [location]);

  return (
    <div className="ComponentHeader">
      <header className="ComponentHeader__header">
        <img src="/imgsCompenentHeader/logoHeader.svg" alt="" />

        <div className="ComponentHeader__lis">
          <img src="/imgsCompenentHeader/line.svg" alt="" />
          <ul>
            <Link to={"/"}>
              <li
                className={isActiveIndexLi === 0 ? "active" : ""}
                onClick={() => setIsActiveLi(0)}
              >
                <span>00</span> HOME
              </li>
            </Link>
            <Link to={"/destination"}>
              <li
                className={isActiveIndexLi === 1 ? "active" : ""}
                onClick={() => setIsActiveLi(1)}
              >
                <span>01</span> DESTINATION
              </li>
            </Link>
            <Link to={"/crew"}>
              <li
                className={isActiveIndexLi === 2 ? "active" : ""}
                onClick={() => setIsActiveLi(2)}
              >
                <span>02</span> CREW
              </li>
            </Link>
            <Link to={"/technology"}>
              <li
                className={isActiveIndexLi === 3 ? "active" : ""}
                onClick={() => setIsActiveLi(3)}
              >
                <span>03</span> TECHNOLOGY
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
