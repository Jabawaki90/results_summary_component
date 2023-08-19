import { useEffect, useState } from "react";
import "./CardSummary.scss";
// import { ReactSVG } from "react-svg";
import { Button } from "antd";
import { ReactComponent as Memory } from "../assets/icon-memory.svg";
import { ReactComponent as Reaction } from "../assets/icon-reaction.svg";
import { ReactComponent as Verbal } from "../assets/icon-verbal.svg";
import { ReactComponent as Visual } from "../assets/icon-visual.svg";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: <Reaction style={{ marginRight: "15px" }} />,
    fontColor: "hsl(0, 100%, 67%)",
    backgroundColor: "hsl(0, 100%, 95%)",
  },
  {
    category: "Memory",
    score: 92,
    icon: <Memory style={{ marginRight: "15px" }} />,
    fontColor: "hsl(39, 100%, 56%)",
    backgroundColor: "hsl(39, 100%, 95%)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: <Verbal style={{ marginRight: "15px" }} />,
    fontColor: "hsl(166, 100%, 37%)",
    backgroundColor: "hsl(166, 100%, 95%)",
  },
  {
    category: "Visual",
    score: 72,
    icon: <Visual style={{ marginRight: "15px" }} />,
    fontColor: "hsl(234, 85%, 45%)",
    backgroundColor: "hsl(234, 85%, 95%)",
  },
];

const MiniCard = (props) => {
  const { category, score, icon, backgroundColor, fontColor } = props.data;
  const value = <span style={{ fontWeight: "800" }}>{`${score}`}</span>;

  return (
    <div
      className="mini-card"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className="mini-card-title">
        {icon}
        <p style={{ fontWeight: "bold", color: `${fontColor}` }}>{category}</p>
      </div>
      <p className="mini-card-title" style={{ color: "hsl(224, 30%, 27%)" }}>
        {value} <span> / 100</span>
      </p>
    </div>
  );
};

const CardSummary = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(data);
    console.log("useState", datas);
  }, []);

  return (
    <div className="card-summary-main-container">
      <div className="inner-container-wrapper">
        <p
          style={{
            // paddingBottom: "10px",
            alignSelf: "self-start",
            fontSize: "25px",
            fontWeight: "800",
          }}
        >
          Summary
        </p>
        {datas.map((card, index) => {
          return <MiniCard key={index} data={card} />;
        })}
        <Button
          className="inner-button"
          type="primary"
          shape="round"
          size="large"
          style={{
            alignSelf: "center",
            marginTop: "15px",
            width: "100%",
            height: "45px",
            backgroundColor: "hsl(224, 30%, 27%)",
            fontFamily: "Hanken Grotesk",
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CardSummary;
