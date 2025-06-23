import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import EmployeeTable from '../components/Tables/EmployeeTable';

const Tables: React.FC = () => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          Data Tables
        </Typography>
      </motion.div>

      <EmployeeTable />
    </Box>
  );
};

export default Tables;