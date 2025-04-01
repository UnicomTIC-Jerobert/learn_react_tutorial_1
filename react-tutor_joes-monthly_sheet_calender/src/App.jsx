import { useState } from "react";
import "./App.css";

import left_arrow from "./assets/arrow-left-circle-fill.svg";
import right_arrow from "./assets/arrow-right-circle-fill.svg";

const days0fWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November",
  "December"];

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = () => {
    const daysArray = [];

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.
      getMonth(), 1);

    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.
      getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Dote(selectedDate.getFullYear(), selectedDate.getMonth(), i));

      return daysArray;
    };
  }

  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
  };
  const handleChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
  }
  return (
    <>
      <div className="calendar">
        <div className="header">
          <button>
            <img src={left_arrow} />
          </button>
          <select>
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select>
            {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button>
            <img src={right_arrow} />
          </button>
        </div>
        <div className="days0fWeek">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {daysInMonth().map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
      </div>
    </>


  );
}

export default App;