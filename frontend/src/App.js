import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import StudentDetails from './pages/studentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/student/:id" 
          element={
            <PrivateRoute>
              <StudentDetails />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
