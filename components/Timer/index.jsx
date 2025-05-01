"use client"; // Add this at the top of the file

import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-06-06T00:00:00"); // Set the target date for the countdown

    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetDate - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-center text-[#FAF8ED]">
      <p className="text-lg font-medium">Event starts in:</p>
      <div className="flex justify-center gap-4 mt-4">
        <div className="bg-[#FAF8ED] text-black px-6 py-2 rounded-lg">
          {timeLeft.days} <span className="block text-sm">Days</span>
        </div>
        <div className="bg-[#FAF8ED] text-black px-6 py-2 rounded-lg">
          {timeLeft.hours} <span className="block text-sm">Hours</span>
        </div>
        <div className="bg-[#FAF8ED] text-black px-6 py-2 rounded-lg">
          {timeLeft.minutes} <span className="block text-sm">Minutes</span>
        </div>
        <div className="bg-[#FAF8ED] text-black px-6 py-2 rounded-lg">
          {timeLeft.seconds} <span className="block text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
