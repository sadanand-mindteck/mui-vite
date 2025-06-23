// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import AppLayout from './components/Layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Tables from './pages/Tables';
import Components from './pages/Components';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuth = localStorage.getItem('mock-auth') === 'true';
  return isAuth ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <Toaster position="top-center" toastOptions={{ duration: 1200, style: { fontSize: 14, minHeight: 32, borderRadius: 4, padding: '8px 16px' } }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ fontSize: '0.92rem' }}>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<PrivateRoute><AppLayout /></PrivateRoute>}>
                <Route index element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="tables" element={<Tables />} />
                <Route path="components" element={<Components />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;