import React, { useState } from 'react';


// Provider Pattern - CounterProvider
const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

// Presentation Component - CounterDisplay
const CounterDisplay = ({ count }) => {
  return <h1>Count: {count}</h1>;
};

// Container Component - CounterContainer
const CounterContainer = () => {
  const { count, increment } = React.useContext(CounterContext);
  return <button onClick={increment}>Increment Count ({count})</button>;
};

const App = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterContainer />
    </CounterProvider>
  );
};

export default App;
