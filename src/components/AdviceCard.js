import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdviceCard.css";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";

import dice from "../images/icon-dice.svg";

const AdviceCard = () => {
  const [advice, setAdvice] = useState({
    id: 0,
    advice: "",
  });

  const getAdvice = async () => {
    const randomId = Math.ceil(Math.random() * 100);
    const response = await fetch(
      `https://api.adviceslip.com/advice/${randomId}`
    );
    const advice = await response.json();
    setAdvice((prevAdvice) => ({
      ...prevAdvice,
      id: advice.slip.id,
      advice: advice.slip.advice,
    }));
  };

  console.log(advice);

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card">
      <p>Advice # {advice.id}</p>
      <h4>{advice.advice}</h4>
      <img src={dividerDesktop} className="divider-desktop" alt="" />
      <img src={dividerMobile} className="divider-mobile" alt="" />

      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="" />
      </div>
    </div>
  );
};

export default AdviceCard;
