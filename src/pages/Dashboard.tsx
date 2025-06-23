import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import {
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  TrendingUp as TrendingUpIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import MetricCard from '../components/Dashboard/MetricCard';
import RevenueChart from '../components/Charts/RevenueChart';
import DepartmentChart from '../components/Charts/DepartmentChart';
import PieChartView from '../components/Charts/PieChartView';
import BarChartView from '../components/Charts/BarChartView';
import LineChartView from '../components/Charts/LineChartView';
import { MetricCard as MetricCardType } from '../types';

const Dashboard: React.FC = () => {
  const metrics: MetricCardType[] = [
    {
      title: 'Total Employees',
      value: '1,234',
      change: 12,
      changeType: 'increase',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Monthly Revenue',
      value: '$85,240',
      change: 8,
      changeType: 'increase',
      icon: <MoneyIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      change: 5,
      changeType: 'increase',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Active Projects',
      value: '47',
      change: 3,
      changeType: 'decrease',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4, color: 'text.primary' }}>
          Dashboard Overview
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        {/* Metric Cards */}
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={metric.title}>
            <MetricCard metric={metric} index={index} />
          </Grid>
        ))}

        {/* Charts */}
        <Grid item xs={12} md={4}>
          <PieChartView />
        </Grid>
        <Grid item xs={12} md={8}>
          <BarChartView />
        </Grid>
        <Grid item xs={12} md={8}>
          <LineChartView />
        </Grid>
        <Grid item xs={12} md={8}>
          <RevenueChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <DepartmentChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;