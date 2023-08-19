import React from "react";
import "./CardYourResult.scss";

const CardYourResult = () => {
  return (
    <div className="card-result-main-container">
      <div className="result-inner-container">
        <p
          style={{
            marginBottom: "30px",
            color: "hsl(241, 100%, 89%)",
            fontSize: "25px",
          }}
        >
          Your Result
        </p>
        <div className="circle-container" style={{ marginBottom: "30px" }}>
          <p
            className="white"
            style={{ fontSize: "80px", margin: "0", fontWeight: "800" }}
          >
            76
          </p>
          <p style={{ color: "hsl(241, 100%, 89%)", margin: "0" }}>of 100</p>
        </div>
        <p
          className="white"
          style={{
            marginBottom: "30px",
            fontSize: "25px",
            margin: 0,
            color: "hsl(221, 100%, 96%)",
            fontWeight: "800",
          }}
        >
          Great
        </p>
        <p style={{ textAlign: "center", color: "hsl(241, 100%, 89%)" }}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default CardYourResult;
