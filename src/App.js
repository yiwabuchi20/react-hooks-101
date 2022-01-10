import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const incrementCount2 = () => {
    setCount((preventValue) => preventValue + 1);
  };
  const decrementCount2 = () => {
    setCount((preventValue) => preventValue - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const multiplyCount = () => {
    setCount(count * 2);
  };
  const divideBy3 = () => {
    if (count % 3 === 0) {
      setCount(count / 3);
    }
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={incrementCount}>+1</button>
        <button onClick={decrementCount}>-1</button>
      </div>
      <div>
        <button onClick={incrementCount2}>+1</button>
        <button onClick={decrementCount2}>-1</button>
      </div>
      <div>
        <button onClick={resetCount}>Reset</button>
        <button onClick={multiplyCount}>×2</button>
        <button onClick={divideBy3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
