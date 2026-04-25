import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount,reset } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = React.useState(0);

  const handleIncrementClick = () => {
    dispatch(increment())
  }

  const handleDecrementClick = () => {
    dispatch(decrement())
  }

  const handleIncrementBy5Click = () => {
    dispatch(incrementByAmount(5))
  }

  const handleResetClick = () => {
    dispatch(reset());
  }

  const handleIncrementByAmountClick = () => {
    dispatch(incrementByAmount(incrementAmount))
  }

  return (
    <div className="counter">
      <br />
      <button onClick={handleIncrementClick}>+</button>
      <br />
      <br />
      <span>{count}</span>
      <br />
      <br />
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleIncrementBy5Click}>Increment by 5</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />

      <input type="Number" placeholder='Enter amount' value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value))} />
      <br />
      <br />
      <button onClick={handleIncrementByAmountClick}>Increment by Amount</button>
    </div>
  )
}

export default App
