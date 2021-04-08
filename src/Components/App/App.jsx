import React, { useState, useEffect } from 'react';
import Game from '../Game/Game';

function App() {

  return (
    <div className="flex items-center justify-center h-100">
      <div className="flex-col bg-white-500">
        <Game/>
      </div>
    </div>
  );
}

export default App;