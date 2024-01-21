import { useEffect, useState } from "react";
import CountItemComponent from "./countItem";

export default function CountMachineComponent() {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [value, setValue] = useState<number>(5);

  useEffect(() => {
    let countNumber: NodeJS.Timeout;
    if (isPlay) {
      countNumber = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue > 0) {
            return prevValue - 1;
          } else {
            setIsPlay(false);
            clearInterval(countNumber);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(countNumber);
  }, [isPlay]);

  const handlePlay = () => {
    setIsPlay(true);
  };

  const handlePause = () => {
    setIsPlay(false);
  };

  const handleReset = () => {
    setValue(0);
    setIsPlay(false);
  };

  return (
    <div>
      <div className="flex gap-2">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <CountItemComponent value={value} />
    </div>
  );
}
