import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NavBar from './components/pages/header/NavBar';
import Feed from './pages/fedd/Feed';
import Profile from './pages/profile/Profile';

function App() {

  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Feed key="feed" />} />
        <Route path="/profile" element={<Profile key="profile" />} />
      </Routes>
    </Router>
  );
}

export default App