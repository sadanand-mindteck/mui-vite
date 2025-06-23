import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Chart from 'react-apexcharts';

const filterOptions = [
  { label: 'Department', value: 'department', children: [
    { label: 'Engineering', value: 'engineering' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
  ]},
  { label: 'Status', value: 'status', children: [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ]},
];

const PieChartView: React.FC = () => {
  const [mainFilter, setMainFilter] = useState('department');
  const [subFilter, setSubFilter] = useState('engineering');

  const chartData = {
    series: [44, 55, 13, 43, 22],
    
  };

  const currentMain = filterOptions.find(opt => opt.value === mainFilter);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Pie Chart</Typography>
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
        <Chart
          options={{
            chart: { type: "pie" },
            labels: ["Engineering", "Marketing", "Sales", "HR", "Finance"],
            legend: { position: "bottom" },
          }}
          series={chartData.series}
          type="pie"
          height={260}
        />
      </CardContent>
    </Card>
  );
};

export default PieChartView;
