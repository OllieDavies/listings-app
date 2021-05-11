import React from "react";
import { Holiday } from "../types";
import styles from "./SortSelector.module.css";

export interface SortMethod { name: string, compareFunction: (a: Holiday, b: Holiday) => number }

export const sortMethods: SortMethod[] = [
  { name: "alphabetically", compareFunction: (a, b) => a.hotelName.localeCompare(b.hotelName) },
  { name: "by price", compareFunction: (a, b) => a.price - b.price },
  { name: "by star rating", compareFunction: (a, b) => b.rating - a.rating },
]

interface Props {
  currentMethod: SortMethod
  onChange: (method: SortMethod) => void;
}

const SortSelector: React.FC<Props> = ({ onChange, currentMethod }) => {
  return (
    <div className={styles.container}>
      {sortMethods.map(method => (
        <button
          key={method.name}
          className={`${styles.button} ${currentMethod.name === method.name && styles["button--active"]}`}
          onClick={() => onChange(method)}>
          sort {method.name}
        </button>
      ))}
    </div>
  )
}

export { SortSelector }