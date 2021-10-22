import React from "react";
import "./BoardIntroduction.scss";
import PortfolioImage from "../../../assets/portfolio.png";

function BoardIntroduction({ nextStep }) {
  return (
    <div className="board">
      <div className="introWrapper">
        <img
          className="introductionImage"
          src={PortfolioImage}
          alt="Portolio Img"
        />
        <button onClick={nextStep} className="btn-default">
          Select Template
        </button>
      </div>
      <div className="introFooter">All Rights Reserved.</div>
    </div>
  );
}

export default BoardIntroduction;
