import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { DashboardData } from '../../types';
import { employeeData } from '../../data/mockData';

const EmployeeTable: React.FC = () => {
  const columns = useMemo<MRT_ColumnDef<DashboardData>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 80,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 120,
      },
      {
        accessorKey: 'salary',
        header: 'Salary',
        size: 100,
        Cell: ({ cell }) => (
          <Box component="span">
            ${cell.getValue<number>().toLocaleString()}
          </Box>
        ),
      },
      {
        accessorKey: 'joinDate',
        header: 'Join Date',
        size: 120,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 100,
        Cell: ({ cell }) => (
          <Chip
            label={cell.getValue<string>()}
            color={cell.getValue<string>() === 'Active' ? 'success' : 'error'}
            size="small"
          />
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: employeeData,
    enableRowSelection: true,
    enableColumnOrdering: true,
    enableGlobalFilter: true,
    enableDensityToggle: true,
    enableColumnFilters: true,
    enableSorting: true,
    enablePagination: true,
    enableBottomToolbar: true,
    enableTopToolbar: true,
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
      density: 'comfortable',
    },
    muiTableContainerProps: {
      sx: {
        minHeight: '400px',
        maxHeight: '600px',
      },
    },
    muiTopToolbarProps: {
      sx: {
        backgroundColor: 'background.paper',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        fontWeight: 600,
        backgroundColor: 'grey.50',
      },
    },
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      },
    }),
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      variant: 'outlined',
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MaterialReactTable table={table} />
    </motion.div>
  );
};

export default EmployeeTable;