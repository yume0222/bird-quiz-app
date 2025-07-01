import { Link } from "react-router-dom"
import { ROUTES } from '../const'
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <h1>鳥漢字クイズ</h1>
      <button type="button" className={styles.button}>
        <Link to={ROUTES.QUIZ} className={styles.linkColor}>クイズを始める</Link>
      </button>
    </>
  )
}