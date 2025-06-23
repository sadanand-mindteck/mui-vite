import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Chart from "react-apexcharts";

const filterOptions = [
  {
    label: "Year",
    value: "year",
    children: [
      { label: "2024", value: "2024" },
      { label: "2025", value: "2025" },
    ],
  },
  {
    label: "Quarter",
    value: "quarter",
    children: [
      { label: "Q1", value: "q1" },
      { label: "Q2", value: "q2" },
      { label: "Q3", value: "q3" },
      { label: "Q4", value: "q4" },
    ],
  },
];

const BarChartView: React.FC = () => {
  const [mainFilter, setMainFilter] = useState("year");
  const [subFilter, setSubFilter] = useState("2024");

  const chartData = {
    series: [{ name: "Revenue", data: [4000, 3000, 5000, 4500, 6000, 5500] }],
    options: {
      //   chart: { type: 'bar' as const },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
      legend: { position: "bottom" },
    },
  };

  const currentMain = filterOptions.find((opt) => opt.value === mainFilter);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bar Chart
          </Typography>
          <FormControl size="small">
            <InputLabel>Main Filter</InputLabel>
            <Select
              value={mainFilter}
              label="Main Filter"
              onChange={(e) => {
                setMainFilter(e.target.value);
                setSubFilter(currentMain?.children[0].value || "");
              }}
            >
              {filterOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel>Sub Filter</InputLabel>
            <Select
              value={subFilter}
              label="Sub Filter"
              onChange={(e) => setSubFilter(e.target.value)}
            >
              {currentMain?.children.map((child) => (
                <MenuItem key={child.value} value={child.value}>
                  {child.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Chart
          options={{
              chart: { type: 'bar' as const },
            xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
            legend: { position: "bottom" },
          }}
          series={chartData.series}
          type="bar"
          height={260}
        />
      </CardContent>
    </Card>
  );
};

export default BarChartView;
