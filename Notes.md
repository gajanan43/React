# 1) Props:

👉 **Props = data you pass from one component to another**

Think like this:

* Parent → sends data
* Child → receives data

---

## 🔹 Simple Example

### Parent:

```jsx
function App() {
  return <Child name="Gajanan" />;
}
```

### Child:

```jsx
function Child(props) {
  return <h1>Hello {props.name}</h1>;
}
```

👉 Output:

```
Hello Gajanan
```

---

## 🔹 Even Simpler Idea

👉 Props are like **function arguments**

```js
function greet(name) {
  return "Hello " + name;
}
```

👉 In React:

* `name` = prop
* component = function

---

## 🔹 Important Rule ❗

👉 Props are **read-only**

You **cannot change them**

❌ Wrong:

```js
props.name = "New";
```

---

## 🔹 Short Syntax (Best Practice)

```jsx
function Child({ name }) {
  return <h1>Hello {name}</h1>;
}
```

---

## 🔹 One-Line Definition (Easy)

> Props are used to pass data from parent to child components in React.

---
Let’s explain **counter using React hooks (useState)** in the simplest way 👇

---

# 2) 🔹 useState Hook:

👉 It’s just a **number (count)** that increases or decreases using React’s hook
👉 We use the **`useState` hook** to store and update it

---

## 🔹 Basic Idea

* `count` → current value
* `setCount` → function to update value

---

## 🔹 Simple Example

```jsx id="4z1o2n"
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
```

---

## 🔹 How it Works (Very Simple)

1. `useState(0)` → starts count from 0
2. `count` → shows value on screen
3. `setCount()` → updates value
4. When value updates → UI automatically updates ✅

---

## 🔹 Better Way (Important)

Use this when updating based on previous value:

```js id="m9g8u2"
setCount(prev => prev + 1);
```

👉 This is safer and used in interviews

---

## 🔹 Real-Life Example

Think of it like:

* `count` = number on a scoreboard
* `setCount` = button that updates the score

---

## 🔹 One-Line (Interview Ready)

> “A counter hook uses `useState` to store a number and update it, causing the UI to re-render automatically.”

---
---

# 3)  useEffect:

👉 `useEffect` is used to **run code after the component renders**

Think:

> “Do something after showing UI”

---

## 🔹 Why we use it?

For things like:

* API calls 🌐
* Updating data
* Timers ⏱️
* Side effects (anything outside UI)

---

## 🔹 Basic Syntax

```jsx id="wz9k2m"
useEffect(() => {
  // code runs after render
}, []);
```

---

## 🔹 Simple Example

```jsx id="5aqvds"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component loaded");
  }, []);

  return <h1>Hello</h1>;
}
```

👉 Runs **only once** when component loads

---

## 🔹 Types of useEffect (Important)

---

### ✅ 1. Run Only Once (on mount)

```js id="9nrg1m"
useEffect(() => {
  console.log("Run once");
}, []);
```

👉 Empty array = run once

---

### ✅ 2. Run when value changes

```js id="9w30b9"
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

👉 Runs when `count` changes

---

### ✅ 3. Run on every render

```js id="7a0mdn"
useEffect(() => {
  console.log("Runs every time");
});
```

👉 No dependency array = runs always

---

## 🔹 Real Example (API Call)

```jsx id="r2br9l"
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("api");
    const data = await res.json();
    console.log(data);
  };

  fetchData();
}, []);
```

---

## 🔹 Cleanup (Very Important)

```js id="54b1f9"
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

👉 Cleanup runs when:

* component unmounts
* or before next effect

---

## 🔹 Super Simple Analogy

👉 `useEffect` = “Do something after the screen updates”

---

## 🔹 One-Line (Interview Ready)

> “useEffect is used to handle side effects like API calls or subscriptions after rendering.”

---
---

## 📝 Question

**In React, when state changes, does the whole component re-render?**

---

## ✅ Answer

When the state changes in React, the **component re-renders**, but the **entire DOM is NOT updated**.

### 🔹 What actually happens:

1. React re-executes the component function
2. A new **Virtual DOM** is created
3. React compares it with the previous Virtual DOM (diffing)
4. Only the **changed parts** are updated in the real DOM

---

### 🔹 Important Points:

* Re-render ≠ full page reload ❌
* Only updated UI parts are changed ✅
* Parent re-render → child also re-renders by default

---

### 🔹 Example:

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("Rendered");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}
```

👉 On button click:

* Component function runs again
* Only `<h1>` updates in UI

---

### 🔹 Optimization (Avoid unnecessary re-renders):

* `React.memo()`
* `useMemo`
* `useCallback`

---

## 💡 One-Line (Interview Ready)

> When state changes, React re-renders the component but updates only the changed parts using the Virtual DOM.

---
---

# 4) useContext

👉 `useContext` is used to **share data between components without passing props again and again**

---

## 🔹 Problem (Why we need it)

Without `useContext`:

```jsx id="f7d9tq"
<App>
  <Parent>
    <Child>
      <GrandChild />
    </Child>
  </Parent>
</App>
```

👉 If you want to send data from `App` → `GrandChild`,
you must pass props through every component 😓

This is called **props drilling**

---

## 🔹 Solution: useContext

👉 Send data directly to any component ✅
(No need to pass through every level)

---

## 🔹 Simple Example

### 1. Create Context

```js id="t4h8pn"
import { createContext } from "react";

const UserContext = createContext();
```

---

### 2. Provide Data

```jsx id="z5pjdt"
function App() {
  return (
    <UserContext.Provider value="Gajanan">
      <Child />
    </UserContext.Provider>
  );
}
```

---

### 3. Use Data

```jsx id="z73fbt"
import { useContext } from "react";

function Child() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}
```

---

## 🔹 Output

```id="9b2c7r"
Hello Gajanan
```

---

## 🔹 Real-Life Analogy

👉 Think of it like **Wi-Fi 📶**

* Provider = Router
* Components = Devices
* `useContext` = connect directly

No need to pass cables (props) everywhere 😄

---

## 🔹 When to use `useContext`

Use it for:

* User login data
* Theme (dark/light)
* Language settings

---

## 🔹 Important Point ❗

👉 It is **not a replacement for all state management**
👉 Best for **global or shared data**

---

## 🔹 One-Line (Interview Ready)

> `useContext` allows sharing data across components without prop drilling.

---
---

# 5) useRef

👉 `useRef` is used to:

1. **Access DOM elements directly**
2. **Store a value without re-rendering the component**

---

## 🔹 Basic Syntax

```js id="q6n8fw"
const myRef = useRef(initialValue);
```

👉 It gives an object like:

```js id="t0y2dr"
{ current: value }
```

---

## 🔹 1. Access DOM (Most Common Use)

```jsx id="d2q1mj"
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
```

👉 Click button → input gets focus ✅

---

## 🔹 2. Store Value (Without Re-render)

```jsx id="jx3k5u"
import { useRef } from "react";

function App() {
  const countRef = useRef(0);

  const increase = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return <button onClick={increase}>Click</button>;
}
```

👉 Value changes, but UI **does NOT re-render**

---

## 🔹 Difference: useState vs useRef

| useState           | useRef                        |
| ------------------ | ----------------------------- |
| Causes re-render   | No re-render                  |
| Used for UI data   | Used for storing values / DOM |
| Triggers UI update | Silent update                 |

---

## 🔹 Important Point ❗

👉 Changing `ref.current` **does NOT update UI**

---

## 🔹 Real-Life Analogy

👉 `useState` = display board (visible changes)
👉 `useRef` = notebook (hidden changes)

---

## 🔹 When to use `useRef`

* Focus input field
* Store previous value
* Timer / interval ID
* Avoid unnecessary re-renders

---

## 🔹 One-Line (Interview Ready)

> `useRef` stores values or references DOM elements without causing re-renders.

---
---


# 6) React Router:

👉 To handle navigation (moving between pages) in React, we use
**React Router**

---

## 🔹 1. Install

```bash
npm install react-router-dom
```

---

## 🔹 2. Basic Setup (Routes)

```jsx id="q2v7rm"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🔹 3. Navigation (Link)

```jsx id="g7r4hx"
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

👉 Works like anchor `<a>` but **no page reload** ✅

---

## 🔹 4. useNavigate (Programmatic Navigation)

👉 Navigate using code (like after login)

```jsx id="q9f7tx"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic
    navigate("/home");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## 🔹 5. Dynamic Routing

👉 Used when data changes based on ID

---

### Route Setup

```jsx id="4n6x1b"
<Route path="/user/:id" element={<User />} />
```

---

### Access ID

```jsx id="1xq5zt"
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}
```

👉 URL example:

```
/user/101
```

---

## 🔹 6. Example Flow

* `/` → Home page
* `/about` → About page
* `/user/101` → Dynamic user page

---

## 🧠 Quick Summary

| Feature       | Use                |
| ------------- | ------------------ |
| `Route`       | Define path        |
| `Link`        | Navigate           |
| `useNavigate` | Navigate with code |
| `useParams`   | Get dynamic data   |

---

## 💡 One-Line (Interview Ready)

> React Router is used to handle navigation in React applications without reloading the page.

---
---


# 🧠 What is Redux:

**Redux** (library: Redux) is a tool used in React to **manage data (state) in one central place**.

---

## 🧾 Simple idea

👉 Imagine your app has many components:

* Navbar
* Profile
* Cart
* Dashboard

All need the same data (like user info or cart items)

❌ Without Redux → you pass data **component → component → component (props drilling)**
✅ With Redux → all data is stored in **one central store**, and any component can use it

---

## 📦 Real-life example

Think of Redux like a **bank** 🏦

* Store = Bank (where money/data is stored)
* Action = You request (deposit/withdraw)
* Reducer = Bank rules (how money changes)
* Component = Customer (uses money/data)

---

## 🔑 Main parts of Redux

### 1. Store 🗄️

👉 Central place where all data lives

---

### 2. Action 📩

👉 What you want to do
Example:

```js
{ type: "ADD_ITEM" }
```

---

### 3. Reducer ⚙️

👉 Decides how data changes

```js
function cartReducer(state = [], action) {
  if (action.type === "ADD_ITEM") {
    return [...state, "item"];
  }
  return state;
}
```

---

### 4. Dispatch 🚀

👉 Sends action to reducer

```js
dispatch({ type: "ADD_ITEM" });
```

---

## 🔄 Flow (very important)

1. User clicks button
2. `dispatch(action)`
3. Reducer updates data
4. Store updates
5. UI automatically updates

👉 This is called **one-way data flow**

---

## 🔧 Simple Example

```jsx id="ex1"
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Add
      </button>
    </div>
  );
}
```

---

## 📌 Why use Redux

* Avoid props drilling
* Centralized data
* Easy to manage large apps
* Predictable behavior

---

## ⚠️ Important (for freshers)

👉 Don’t use Redux for small apps
👉 Use it when:

* Many components need same data
* App becomes complex

---

## 🧾 One-line summary

👉 **Redux = One central place to store and manage all app data**

---
---

# 🧠 What is useMemo:

`useMemo` is a React Hook that **remembers (caches) a value** so React **doesn’t recalculate it every time** the component renders.

---

## 🤔 Why do we need it?

Sometimes your component does **heavy calculations** (like loops, filtering big data, etc.).

👉 Without `useMemo`:

* Every render → calculation runs again 😓

👉 With `useMemo`:

* Calculation runs **only when needed** ✅

---

## 📦 Syntax

```javascript
const memoizedValue = useMemo(() => {
  // expensive calculation
  return result;
}, [dependencies]);
```

---

## 🔍 Simple Example

```javascript
import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  const expensiveCalculation = (n) => {
    console.log("Calculating...");
    return n * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(num);
  }, [num]); // runs only when num changes

  return (
    <div>
      <h1>Result: {result}</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setNum(num + 1)}>
        Change Num
      </button>
    </div>
  );
}

export default App;
```

---

## 🧩 What’s happening here?

* Clicking **Count button** 👉 component re-renders
  ❌ But calculation does NOT run again

* Clicking **Change Num button** 👉
  ✅ Calculation runs again

---

## 🧠 Easy Way to Remember

👉 `useMemo = remember value`

* Same input → reuse old result
* Changed input → calculate again

---

## ⚠️ When to use `useMemo`?

Use it when:

* Heavy calculations 🧮
* Filtering large arrays 📊
* Performance optimization 🚀

Don’t use it for:

* Simple values (like `num * 2`) → unnecessary

---
---

# 🧠 Why we need useCallback:

In React, whenever a component re-renders:

* All functions inside it are **re-created again**
* This can cause **performance issues**
* Especially when passing functions to **child components**

👉 This is where `useCallback` helps.

---

## 📦 Simple Idea

👉 **`useCallback` = "Don't recreate this function unless something changes"**

---

## 🔹 Syntax

```javascript
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```

* It returns a **same function reference**
* Only updates when **dependencies change**

---

## 🔍 Example (Without useCallback)

```javascript
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```

❌ Problem:

* Every render → `handleClick` is **new function**
* Child component re-renders unnecessarily

---

## ✅ Example (With useCallback)

```javascript
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Child onClick={handleClick} />;
}
```

✅ Now:

* Function is **same (cached)**
* Child component **won’t re-render unnecessarily**

---

## ⚡ When to use `useCallback`?

Use it when:

* Passing functions to **child components**
* Using **React.memo**
* Avoiding **unnecessary re-renders**
* Function is used in **dependency array of useEffect**

---

## ❌ When NOT to use

Don’t use everywhere:

* Small apps → not needed
* Overusing can make code complex

---

## 🆚 useCallback vs useMemo

| Hook        | Purpose                 |
| ----------- | ----------------------- |
| useCallback | Caches **function**     |
| useMemo     | Caches **value/result** |

---

## 🧾 One-line summary

👉 **`useCallback` prevents function recreation and improves performance**

---








