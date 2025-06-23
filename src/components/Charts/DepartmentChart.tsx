import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { motion } from 'framer-motion';
import { departmentData } from '../../data/mockData';

const DepartmentChart: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
      animations: {
        enabled: true,
        speed: 800,
      },
    },
    labels: departmentData.map(item => item.name),
    colors: ['#1976d2', '#dc004e', '#ff9800', '#4caf50', '#9c27b0'],
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return Math.round(val) + '%';
      },
    },
  };

  const series = departmentData.map(item => item.value);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardContent>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 2 }}>
            Department Distribution
          </Typography>
          <Box sx={{ height: 350 }}>
            <Chart
              options={chartOptions}
              series={series}
              type="donut"
              height={350}
            />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DepartmentChart;