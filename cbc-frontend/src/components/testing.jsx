import { useState } from "react";
import "./testing.css";
export default function Testing() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Students");

  function increment() {
    console.log("Incremented:");
    setCount(count + 1);
  }
  function decrement() {
    console.log("Decremented:");
    setCount(count - 1);
  }
  function changeName(value) {
    setName(value);
  }
  return (
    <div className="background">
      <h1>{name}</h1>
      <button className="val" onClick={decrement}>-</button>
      <span>{count}</span>
      <button className="increment" onClick={increment}>+</button>

      <div className="button-panel">
       <button onClick={() => changeName("Students")}>Students</button>
       <button onClick={() => changeName("Teachers")}>Teachers</button>
       <button onClick={() => changeName("Admins")}>Admins</button>
      </div>
    </div>

  );
}
