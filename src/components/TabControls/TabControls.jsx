import React from 'react';

export default function TabControls({ onHandlerButton }) {
  return (
    <div className="controlsBlock">
      <button onClick={e => onHandlerButton(e.target.id)} id="Tab1">
        Tab-1
      </button>
      <button onClick={e => onHandlerButton(e.target.id)} id="Tab2">
        Tab-2
      </button>
      <button onClick={e => onHandlerButton(e.target.id)} id="Tab3">
        Tab-3
      </button>
    </div>
  );
}
