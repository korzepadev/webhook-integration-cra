import * as React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
}

export default App;
