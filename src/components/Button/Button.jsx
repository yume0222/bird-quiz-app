import React, { Children } from 'react'
import styles from "./Button.module.css"

export default function Button({ children, onClick }) {
  return (
    <li className={styles.quizItem}>
      <button className={styles.button} type="button" onClick={onClick}>
        {children}
      </button>
    </li>
  )
}
