import React, { useEffect, useRef, useState } from "react";

function Countdown() {
  const [timerDays, setTimerDays] = useState("");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");

  let interval = useRef();

  function calculateTimeLeft() {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Check if the current date is before January 2
    const targetDate = today < new Date(`January 2, ${currentYear}`)
      ? new Date(`January 2, ${currentYear}`)
      : new Date(`January 2, ${currentYear + 1}`);

    const countdownDate = targetDate.getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }

  useEffect(() => {
    calculateTimeLeft();
    return () => clearInterval(interval.current); // Cleanup on unmount
  }, []);

  return (
    <div className="countdown-container">
      <div className="container-sm">
        <div className="countdown-title">
          <h1>Our next anniversary is in</h1>
        </div>

        <ul className="row countdown-timer">
          <li className="col-lg-3 col-md-3">
            <p className="time">{timerDays}</p>
            <p className="time-text">DAYS</p>
          </li>
          <li className="col-lg-3 col-md-3">
            <p className="time">{timerHours}</p>
            <p className="time-text">HOURS</p>
          </li>
          <li className="col-lg-3 col-md-3">
            <p className="time">{timerMinutes}</p>
            <p className="time-text">MINUTES</p>
          </li>
          <li className="col-lg-3 col-md-3">
            <p className="time">{timerSeconds}</p>
            <p className="time-text">SECONDS</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Countdown;
