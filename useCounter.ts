import {useEffect, useRef, useState} from 'react';

const useCounter = (count = 60): [number, () => void] => {
  const [currentCounter, setCurrentCounter] = useState<number>(0);
  const timer = useRef<any>(null);
  const startCounter = () => {
    timer.current && clearInterval(timer.current);
    setCurrentCounter(count);
  };
  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    if (currentCounter === 0) {
      timer.current && clearTimeout(timer.current);
    } else {
      if (currentCounter === count) {
        timer.current = setInterval(() => {
          setCurrentCounter(val => val - 1);
        }, 1000);
      }
    }
  }, [currentCounter, count]);
  return [currentCounter, startCounter];
};

export default useCounter;
