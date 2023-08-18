import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
