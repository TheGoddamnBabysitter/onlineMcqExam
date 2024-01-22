import React, { useState, useEffect } from "react";
import "../styles/Timer.css";
const Timer = ({ setHaveExamTime, initialMinutes = 1, setRestTime }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          // alert("time up my boi");
          setHaveExamTime(false);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }

      setRestTime(initialMinutes * 60 - (minutes * 60 + seconds));
      setPercentage(
        ((initialMinutes * 60 - (minutes * 60 + seconds)) /
          (initialMinutes * 60)) *
          100
      );
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className="timer-container fixed top-10 right-10">
      <div className="timer-circle">
        <svg>
          <circle className="border-circle" r="45" cx="50" cy="50" />
          <circle
          r="45"
          cx="50"
          cy="50"
          style={{
            strokeDashoffset: `calc(var(--circle-circumference) - (var(--circle-circumference) * ${percentage}) / 100)`,
          }}
        ></circle>
        </svg>
        <span className="timer-text">{`${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</span>
      </div>
    </div>
  );
};

export default Timer;
