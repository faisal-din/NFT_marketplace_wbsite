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
    <div className="w-full sm:w-80  p-8 bg-primary bg-opacity-60 text-white mb-3  rounded-3xl">
      <p className="text-sm">Auctions end in:</p>

      <div className="flex justify-between items-center gap-3 mt-3">
        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl font-bold">{timeLeft.hours}</p>
          <p className="text-sm">Hours</p>
        </div>

        <p className="text-3xl font-bold">:</p>

        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl font-bold">{timeLeft.minutes}</p>
          <p className="text-sm">Minutes</p>
        </div>

        <p className="text-3xl font-bold">:</p>

        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl font-bold">{timeLeft.seconds}</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
