import { useState, useEffect } from "react";

export const useCountdown = (targetTime?: number) => {
  const [remainingTime, setRemainingTime] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (!targetTime) return;

    const now = Date.now();

    if (targetTime <= now) {
      setRemainingTime(undefined);
      return;
    }

    setRemainingTime(targetTime - now);

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev && prev > 1000) {
          return prev - 1000;
        }
        clearInterval(interval);
        return undefined;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return remainingTime;
};
