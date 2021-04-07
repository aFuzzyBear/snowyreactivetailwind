import React, { useState, useEffect } from 'react';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="flex items-center h-100">
      <div className="flex-col dialog-box ">
        <header className="text-4xl">
          Welcome to your Snowy Reactive Tailwinds App
        </header>
          <p className="text-3xl">
            Page has been open for <code>{count}</code> seconds.
          </p>
      </div>
    </div>
  );
}

export default App;