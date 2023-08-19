import "./App.css";
import CardSummary from "./components/CardSummary";
import CardYourResult from "./components/CardYourResult";

const App = () => {
  return (
    <div className="main-page">
      <div className="center-container">
        <CardYourResult />
        <CardSummary />
      </div>
    </div>
  );
};

export default App;
