import { useState } from 'react'


function App() {
  // 1. defines we have some state associated with this component
  // 2. the output of use state is an array, thus [count, setCount]
  // 3. 1st value(count) is the current value of the state, 2nd(setCount) is setter func, which you call the function to set the state
  const [count, setCount] = useState(10);
  function addOne() {
    count++;
    console.log('htllo');
  }
  return (
    <div className="App">
      <button
        onClick={addOne}
      >Count = {count}</button>

    </div>
  )
}

export default App
