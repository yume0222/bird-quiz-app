import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/bird-quiz-app/"}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
