import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { MetricCard as MetricCardType } from '../../types';

interface MetricCardProps {
  metric: MetricCardType;
  index: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Card sx={{ height: '100%', cursor: 'pointer' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ color: 'primary.main' }}>
              {metric.icon}
            </Box>
            <Chip
              label={`${metric.changeType === 'increase' ? '+' : '-'}${Math.abs(metric.change)}%`}
              color={metric.changeType === 'increase' ? 'success' : 'error'}
              size="small"
            />
          </Box>
          
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {metric.value}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {metric.title}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MetricCard;