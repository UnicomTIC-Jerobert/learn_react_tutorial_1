import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
    } else {
      setBmi(null);
      setBmiStatus("");
    }
  };

  const clearAll = () => {
    setBmi(null);
    setBmiStatus("");
  }

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input-container">
            <label htmlFor="height">Height (cm) :</label>
            <input type="text" id="height" />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg) :</label>
            <input type="text" id="weight" />
          </div>
          <button>Calculate BMI</button>
          <div className="result">
            <p>Your BMI is: 28.3</p>
            <p>Status: Over Weight</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;