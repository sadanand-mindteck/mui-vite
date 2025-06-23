import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { motion } from 'framer-motion';
import dayjs, { Dayjs } from 'dayjs';

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, 'day'));
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 3 }}>
              Date & Time Selection
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  sx={{ minWidth: 200 }}
                />
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  sx={{ minWidth: 200 }}
                />
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TimePicker
                  label="Select Time"
                  value={selectedTime}
                  onChange={(newValue) => setSelectedTime(newValue)}
                  sx={{ minWidth: 200 }}
                />
                <DateTimePicker
                  label="Date & Time"
                  value={selectedDateTime}
                  onChange={(newValue) => setSelectedDateTime(newValue)}
                  sx={{ minWidth: 250 }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </LocalizationProvider>
  );
};

export default DateRangePicker;