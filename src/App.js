import React, { useState } from "react";

const App = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const incrementPrice = () => setPrice(price + 1);
  const decrementPrice = () => setPrice(price - 1);

  const inputName = (e) => {
    setName(e.target.value);
  };

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

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
