import { useState } from 'react'
// https://www.youtube.com/watch?v=-bEzt5ISACA&t

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  // const [name, setName] = useState("");
// 6. Instead of starting useState as "" for the name, useState can also take a function as a starting point
// (ex. if you need complex calc, it only needs to run onces when component is initialized)
  const [name, setName] = useState(() => "Jack");   


// 5. Scalers vs References
// 5a. Strings, numbers and booleans are scalers, you get back a copy of the value then you keep the local copy
// 5b. Objects and arrays are references, when you give react a reference to the array, it doesnt hold the array 
//     data itself, but a reference to the array,then it gives back the same array reference, we then use push to 
//     mutate the array, that is why a rerender is required after using a reference, unlike a scaler
//     THUS, creating a newArray with spread operator and name value...or just all in one like a fancy pants
const onAddName = () => {
  console.log(name);
  // longer but more descriptive
  // const newArray = [...list,name];
  // setList(newArray);
  // OR fancy pants way
  setList([...list,name]);
  setName("");
}

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)} />
        <button onClick={onAddName}>Add Name</button>
    </div>
  )
}

function Counter() {
  // 1. defines we have some state associated with this component
  // 2. the output of use state is an array, thus [count, setCount]
  // 3. 1st value(count) is the current value of the state, 2nd(setCount) is setter func, which you call the function to set the state
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count +1)
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

// 4. State is applied independently to each instance of Counter, so each counter can have its own independent values
function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <NameList />
    </div>
  )
}

export default App
