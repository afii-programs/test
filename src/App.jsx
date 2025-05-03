import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'; // Keep eager loading if preferred for entry points
// Lazy load other pages
const SignIn = lazy(() => import('./pages/SignIn'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Tables = lazy(() => import('./pages/Tables')); // <-- Add this line
// const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Optional: Add a loading indicator */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tables" element={<Tables />} /> {/* <-- Add this route */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* Set default route - maybe signin or signup? */}
        <Route path="/" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
}

export default App;