import React, { useState } from "react";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const counterNumber = (): void => {
    setCount(count + 1);
  };
  return (
    <div className=" text-left text-lg">
      <header className="App-header">
        <button onClick={counterNumber}>Count</button>
        <div>{count}</div>
      </header>
    </div>
  );
};

export default App;
