import React from 'react';
import s from './TabControl.module.css';
export default function TabList({ onHandlerButton }) {
  return (
    <div className={s.container}>
      <button
        className={s.red}
        onClick={e => onHandlerButton(e.target.id)}
        id="Tab1"
      >
        Tab-1
      </button>
      <button
        className={s.blue}
        onClick={e => onHandlerButton(e.target.id)}
        id="Tab2"
      >
        Tab-2
      </button>
      <button
        className={s.green}
        onClick={e => onHandlerButton(e.target.id)}
        id="Tab3"
      >
        Tab-3
      </button>
    </div>
  );
}
