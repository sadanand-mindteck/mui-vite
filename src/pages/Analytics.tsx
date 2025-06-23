import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { motion } from 'framer-motion';

const Analytics: React.FC = () => {
  const barChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
    },
    colors: ['#1976d2'],
    xaxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    },
    yaxis: {
      title: { text: 'Performance Score' },
    },
    title: {
      text: 'Quarterly Performance',
    },
  };

  const lineChartOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: { show: false },
    },
    colors: ['#dc004e', '#1976d2'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: {
      title: { text: 'Users' },
    },
    title: {
      text: 'User Growth Comparison',
    },
  };

  const barSeries = [{ name: 'Performance', data: [85, 92, 78, 96] }];
  const lineSeries = [
    { name: 'New Users', data: [1200, 1500, 1800, 2100, 2400, 2800] },
    { name: 'Returning Users', data: [800, 950, 1100, 1300, 1500, 1750] },
  ];

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          Advanced Analytics
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
                <Chart
                  options={barChartOptions}
                  series={barSeries}
                  type="bar"
                  height={350}
                />
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
                <Chart
                  options={lineChartOptions}
                  series={lineSeries}
                  type="line"
                  height={350}
                />
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;