import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Chart from 'react-apexcharts';

const filterOptions = [
  { label: 'Region', value: 'region', children: [
    { label: 'North', value: 'north' },
    { label: 'South', value: 'south' },
    { label: 'East', value: 'east' },
    { label: 'West', value: 'west' },
  ]},
  { label: 'Product', value: 'product', children: [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
  ]},
];

const LineChartView: React.FC = () => {
  const [mainFilter, setMainFilter] = useState('region');
  const [subFilter, setSubFilter] = useState('north');

  const chartData = {
    series: [{ name: 'Sales', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }],
    options: {
      chart: { type: 'line' as const },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
      legend: { position: 'bottom' as const },
    },
  };

  const currentMain = filterOptions.find(opt => opt.value === mainFilter);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Line Chart</Typography>
          <FormControl size="small">
            <InputLabel>Main Filter</InputLabel>
            <Select value={mainFilter} label="Main Filter" onChange={e => { setMainFilter(e.target.value); setSubFilter(currentMain?.children[0].value || ''); }}>
              {filterOptions.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel>Sub Filter</InputLabel>
            <Select value={subFilter} label="Sub Filter" onChange={e => setSubFilter(e.target.value)}>
              {currentMain?.children.map(child => (
                <MenuItem key={child.value} value={child.value}>{child.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Chart options={chartData.options} series={chartData.series} type="line" height={260} />
      </CardContent>
    </Card>
  );
};

export default LineChartView;
