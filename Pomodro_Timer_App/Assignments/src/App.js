import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/login-with-google/Login';
import UserDetails from './components/login-with-google/UserDetails';
import Pomodoro from './components/Pomodoro-timer/PomodoroTimer';
import GitUser from './components/users_github/GitUser';

function App() {
  const user = localStorage.getItem('email');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          {user ? <Route exact path="/login" element={<UserDetails />} /> : <Route exact path="/login" element={<Login />} />} 

          <Route exact path="/pomodoro" element={<Pomodoro />} />
          <Route exact path="/userGithub" element={<GitUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
