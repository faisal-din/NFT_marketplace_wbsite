import { useEffect, useState } from 'react';

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          hours--;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full sm:w-72  p-8 bg-secondary bg-opacity-60 text-white  mb-3  rounded-3xl">
      <p className="text-sm font-monospace">Auctions end in:</p>

      <div className="flex justify-between items-center gap-3 mt-3">
        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl font-bold font-monospace">{timeLeft.hours}</p>
          <p className="text-sm font-monospace">Hours</p>
        </div>

        <p className="text-3xl font-bold">:</p>

        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl font-bold font-monospace">
            {timeLeft.minutes}
          </p>
          <p className="text-sm font-monospace">Minutes</p>
        </div>

        <p className="text-3xl font-bold">:</p>

        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl font-bold font-monospace">
            {timeLeft.seconds}
          </p>
          <p className="text-sm font-monospace">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
