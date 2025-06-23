import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import DateRangePicker from '../components/DatePickers/DateRangePicker';
import DepartmentTree from '../components/TreeView/DepartmentTree';

const Components: React.FC = () => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          UI Components
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <DateRangePicker />
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <DepartmentTree />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Components;