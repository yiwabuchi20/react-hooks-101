import React, { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  const incrementPrice = () => setState({ ...state, price: price + 1 });
  const decrementPrice = () => setState({ ...state, price: price - 1 });
  const inputName = (e) => {
    setState({ ...state, name: e.target.value });
  };
  const reset = () => setState(props);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={incrementPrice}>+1</button>
      <button onClick={decrementPrice}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} type="text" onChange={inputName} />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
