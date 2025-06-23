import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderRadius: 12,
          padding: 8,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          minHeight: 32,
          padding: '4px 12px',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        margin: 'dense',
        variant: 'outlined',
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            top: 0,
            left: 0,
            transform: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#374151',
            background: 'transparent',
            padding: 0,
            marginBottom: 4,
            position: 'static',
          },
          '& .MuiInputLabel-shrink': {
            transform: 'none',
            position: 'static',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#374151',
            marginBottom: 4,
          },
          '& .MuiOutlinedInput-root': {
            marginTop: 0,
            '& .MuiOutlinedInput-notchedOutline': {
              legend: {
                display: 'none',
              },
            },
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        displayEmpty: true,
      },
      styleOverrides: {
        root: {
          background: '#f9fafb', // Tailwind gray-50
          borderRadius: 6,
          fontSize: '0.97rem',
          minHeight: 36,
          paddingLeft: 8,
          paddingRight: 8,
          '& .MuiSelect-select': {
            padding: '8px 12px',
            minHeight: 24,
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e5e7eb', // Tailwind gray-200
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
            boxShadow: '0 0 0 2px #e3f0fd',
          },
        },
        icon: {
          color: '#64748b', // Tailwind gray-400
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
        margin: 'dense',
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.95rem',
          minHeight: 32,
        },
      },
    },
    MuiListItemButton: {
      defaultProps: {
        dense: true,
      },
      styleOverrides: {
        root: {
          minHeight: 36,
          paddingTop: 2,
          paddingBottom: 2,
        },
      },
    },
    MuiList: {
      defaultProps: {
        dense: true,
      },
      styleOverrides: {
        root: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '4px 8px',
          fontSize: '0.95rem',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e0e0e0',
        },
      },
    },
  },
});