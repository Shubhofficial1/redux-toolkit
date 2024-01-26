import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
  reset,
} from "./features/counter/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>{count}</h1>
        {incrementAmount}
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increase
        </button>

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrease
        </button>

        <button
          onClick={() => {
            setIncrementAmount(0);
            dispatch(reset());
          }}
        >
          Reset
        </button>

        <button
          onClick={() => {
            dispatch(increaseByAmount(addValue));
          }}
        >
          Increase By Amount
        </button>
      </div>
    </>
  );
}

export default App;
