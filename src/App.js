import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {MainPage} from './pages/MainPage';
import {Users} from './pages/Users';
import {Posts} from './pages/Posts';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Main page</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </Router>
    );
}

export default App;





