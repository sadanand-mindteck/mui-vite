import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Card, CardContent, Typography, TextField, Button, InputAdornment, IconButton, Avatar, Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const mockUser = { username: 'admin', password: 'admin' };

type LoginFormInputs = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data: LoginFormInputs) => {
    if (data.username === mockUser.username && data.password === mockUser.password) {
      localStorage.setItem('mock-auth', 'true');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #E3F0FD 0%, #F9FAFB 100%)',
    }}>
      {/* Analytics-themed background image */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: `url('https://assets-global.website-files.com/63e4b7b7e7e6e2b1e7e7e7e7/63e4b7b7e7e6e2b1e7e7e7e8_analytics-hero-bg.svg') center/cover no-repeat`,
        opacity: 0.18,
        pointerEvents: 'none',
      }} />
      {/* Animated background blobs */}
      <Box sx={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <linearGradient id="blob1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3A8DFF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#36B37E" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="blob2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2065D1" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#F9FAFB" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <g>
            <ellipse cx="300" cy="200" rx="320" ry="180" fill="url(#blob1)">
              <animate attributeName="cx" values="300;400;300" dur="8s" repeatCount="indefinite" />
              <animate attributeName="cy" values="200;250;200" dur="7s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="1200" cy="700" rx="340" ry="160" fill="url(#blob2)">
              <animate attributeName="cx" values="1200;1100;1200" dur="10s" repeatCount="indefinite" />
              <animate attributeName="cy" values="700;750;700" dur="9s" repeatCount="indefinite" />
            </ellipse>
          </g>
        </svg>
      </Box>
      {/* Card content */}
      <Card sx={{ minWidth: 340, maxWidth: 380, borderRadius: 4, boxShadow: '0 8px 32px 0 rgba(145, 158, 171, 0.16)', zIndex: 1, backdropFilter: 'blur(2px)' }}>
        <CardContent>
          <Stack alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>Sign in to Minimal</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              Use <b>admin</b> / <b>admin</b> for demo login
            </Typography>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: 'Username required' }}
              render={({ field }) => (
                <TextField {...field} label="Username" fullWidth error={!!errors.username} helperText={errors.username?.message} sx={{ mb: 2 }} autoFocus />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  sx={{ mb: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Button type="submit" variant="contained" fullWidth size="large" sx={{ mt: 1, fontWeight: 700, borderRadius: 2, boxShadow: 'none' }}>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
