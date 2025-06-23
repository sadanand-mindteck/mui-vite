import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const Settings: React.FC = () => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          Settings
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Notifications
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Email notifications"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Push notifications"
                  />
                  <FormControlLabel
                    control={<Switch />}
                    label="SMS notifications"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Weekly reports"
                  />
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Account Settings
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Display Name"
                    defaultValue="Admin User"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    defaultValue="admin@company.com"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    label="Phone"
                    defaultValue="+1 (555) 123-4567"
                    variant="outlined"
                    fullWidth
                  />
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Button variant="contained" sx={{ alignSelf: 'flex-start' }}>
                    Save Changes
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;