import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, MenuItem, Select, FormControl, InputLabel, IconButton, Menu } from '@mui/material';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { motion } from 'framer-motion';
import { revenueData } from '../../data/mockData';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import DownloadIcon from '@mui/icons-material/Download';

const groupOptions = ['Month', 'Quarter', 'Year'];

const RevenueChart: React.FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs().startOf('year'));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().endOf('year'));
  const [groupBy, setGroupBy] = useState('Month');
  const [tableView, setTableView] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Filter and group logic would go here (mocked for now)
  const filteredData = revenueData; // TODO: filter by date and group

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: { show: false },
      animations: { enabled: true, speed: 800 },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#1976d2'],
    fill: { opacity: 0.1 },
    xaxis: { categories: filteredData.map(item => item.name) },
    yaxis: { title: { text: 'Revenue ($)' } },
    grid: { borderColor: '#f1f1f1' },
  };

  const series = [
    { name: 'Revenue', data: filteredData.map(item => item.value) },
  ];

  const handleDownload = (type: 'png' | 'svg') => {
    const chartEl = document.querySelector('.apexcharts-canvas') as HTMLElement & { chart?: { dataURI: () => Promise<{ imgURI: string; svgURI: string }> } };
    if (chartEl && chartEl.chart) {
      chartEl.chart.dataURI().then(({ imgURI, svgURI }) => {
        const link = document.createElement('a');
        link.href = type === 'png' ? imgURI : svgURI;
        link.download = `revenue-chart.${type}`;
        link.click();
      });
    }
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <Card sx={{ p: 1, borderRadius: 2 }}>
        <CardContent sx={{ p: 1 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Monthly Revenue
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <DatePicker label="Start Date" value={startDate} onChange={setStartDate} sx={{ minWidth: 110 }} slotProps={{ textField: { size: 'small' } }} />
            <DatePicker label="End Date" value={endDate} onChange={setEndDate} sx={{ minWidth: 110 }} slotProps={{ textField: { size: 'small' } }} />
            <FormControl sx={{ minWidth: 100 }} size="small">
              <InputLabel>Group By</InputLabel>
              <Select value={groupBy} label="Group By" onChange={e => setGroupBy(e.target.value)} size="small">
                {groupOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
              </Select>
            </FormControl>
            <Button variant="outlined" size="small" onClick={() => setTableView(v => !v)}>
              {tableView ? 'Chart View' : 'Table View'}
            </Button>
            <IconButton size="small" onClick={e => setAnchorEl(e.currentTarget)}>
              <DownloadIcon fontSize="small" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={() => { handleDownload('png'); setAnchorEl(null); }}>Download PNG</MenuItem>
              <MenuItem onClick={() => { handleDownload('svg'); setAnchorEl(null); }}>Download SVG</MenuItem>
            </Menu>
          </Box>
          {!tableView ? (
            <Box sx={{ height: 350 }}>
              <Chart options={chartOptions} series={series} type="area" height={350} />
            </Box>
          ) : (
            <Box sx={{ maxHeight: 350, overflow: 'auto', mt: 2 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ccc', padding: 8 }}>Name</th>
                    <th style={{ borderBottom: '1px solid #ccc', padding: 8 }}>Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{row.name}</td>
                      <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>${row.value.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="text" size="small">View More</Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RevenueChart;