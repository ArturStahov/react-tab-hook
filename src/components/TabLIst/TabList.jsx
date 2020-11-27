import React from 'react';
import s from './TabList.module.css';

export default function App({ Tab1, Tab2, Tab3 }) {
  return (
    <ul className={s.container}>
      {Tab1 && (
        <li className={s.tab}>
          <img
            className={s.image}
            src="https://cdn.pixabay.com/photo/2020/11/21/23/54/road-5765360_960_720.jpg"
            alt="some img"
          />
        </li>
      )}
      {Tab2 && (
        <li className={s.tab}>
          <img
            className={s.image}
            src="https://cdn.pixabay.com/photo/2020/11/22/16/58/road-5767221_960_720.jpg"
            alt="some img"
          />
        </li>
      )}
      {Tab3 && (
        <li className={s.tab}>
          <img
            className={s.image}
            src="https://cdn.pixabay.com/photo/2013/11/15/13/57/road-210913_960_720.jpg"
            alt="some img"
          />
        </li>
      )}
    </ul>
  );
}
