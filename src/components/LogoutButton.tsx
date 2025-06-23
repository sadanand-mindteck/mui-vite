import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('mock-auth');
    navigate('/login');
  };
  return (
    <Button color="error" variant="outlined" size="small" onClick={handleLogout} sx={{ ml: 1 }}>
      Logout
    </Button>
  );
};

export default LogoutButton;
