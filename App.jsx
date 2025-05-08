import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTask from './pages/NewTask';
import TaskDetails from './pages/TaskDetails';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
