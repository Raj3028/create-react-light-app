import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Fallback from './components/Fallback';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Fallback />} />
                </Routes>
            </Router>,
        </div>
    );
}

export default App;
