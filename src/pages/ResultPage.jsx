import { Link, useLocation } from "react-router-dom"
import { ROUTES } from '../const'
import styles from './ResultPage.module.css';

export default function ResultPage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNumLen = location.state.correctNumLen

  return (
    <>
      <p>あなたの正解数は...</p>
      <h2 className={styles.resultTitle}>{`${correctNumLen}/${maxQuizLen}問正解`}</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.toQuizButton} type="button">
          <Link to={ROUTES.QUIZ} className={styles.linkColor}>再挑戦</Link>
        </button>
        <button type="button" className={styles.toHomeButton}>
          <Link to={ROUTES.HOME}>ホームに戻る</Link>
        </button>
      </div>
    </>
  )
}

