import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import {
  Business as BusinessIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  Engineering as EngineeringIcon,
  Campaign as CampaignIcon,
  TrendingUp as TrendingUpIcon,
  AccountBalance as AccountBalanceIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const DepartmentTree: React.FC = () => {
  const renderTreeIcon = (type: string) => {
    switch (type) {
      case 'company':
        return <BusinessIcon sx={{ fontSize: 18 }} />;
      case 'department':
        return <GroupIcon sx={{ fontSize: 18 }} />;
      case 'engineering':
        return <EngineeringIcon sx={{ fontSize: 18 }} />;
      case 'marketing':
        return <CampaignIcon sx={{ fontSize: 18 }} />;
      case 'sales':
        return <TrendingUpIcon sx={{ fontSize: 18 }} />;
      case 'finance':
        return <AccountBalanceIcon sx={{ fontSize: 18 }} />;
      case 'operations':
        return <SettingsIcon sx={{ fontSize: 18 }} />;
      default:
        return <PersonIcon sx={{ fontSize: 18 }} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 3 }}>
            Organization Structure
          </Typography>
          
          <Box sx={{ minHeight: 400 }}>
            <SimpleTreeView
              defaultExpandedItems={['company', 'engineering', 'marketing']}
              sx={{
                '& .MuiTreeItem-content': {
                  padding: '8px',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText',
                  },
                },
                '& .MuiTreeItem-label': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontWeight: 500,
                },
              }}
            >
              <TreeItem
                itemId="company"
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {renderTreeIcon('company')}
                    Analytics Pro Inc.
                  </Box>
                }
              >
                <TreeItem
                  itemId="engineering"
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {renderTreeIcon('engineering')}
                      Engineering (12)
                    </Box>
                  }
                >
                  <TreeItem
                    itemId="frontend"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {renderTreeIcon('person')}
                        Frontend Team (5)
                      </Box>
                    }
                  />
                  <TreeItem
                    itemId="backend"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {renderTreeIcon('person')}
                        Backend Team (4)
                      </Box>
                    }
                  />
                  <TreeItem
                    itemId="devops"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {renderTreeIcon('person')}
                        DevOps Team (3)
                      </Box>
                    }
                  />
                </TreeItem>

                <TreeItem
                  itemId="marketing"
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {renderTreeIcon('marketing')}
                      Marketing (8)
                    </Box>
                  }
                >
                  <TreeItem
                    itemId="digital"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {renderTreeIcon('person')}
                        Digital Marketing (4)
                      </Box>
                    }
                  />
                  <TreeItem
                    itemId="content"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {renderTreeIcon('person')}
                        Content Team (4)
                      </Box>
                    }
                  />
                </TreeItem>

                <TreeItem
                  itemId="sales"
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {renderTreeIcon('sales')}
                      Sales (10)
                    </Box>
                  }
                >
                  <TreeItem
                    itemId="enterprise"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {renderTreeIcon('person')}
                        Enterprise Sales (6)
                      </Box>
                    }
                  />
                  <TreeItem
                    itemId="smb"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {renderTreeIcon('person')}
                        SMB Sales (4)
                      </Box>
                    }
                  />
                </TreeItem>

                <TreeItem
                  itemId="finance"
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {renderTreeIcon('finance')}
                      Finance (4)
                    </Box>
                  }
                />

                <TreeItem
                  itemId="operations"
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {renderTreeIcon('operations')}
                      Operations (6)
                    </Box>
                  }
                />
              </TreeItem>
            </SimpleTreeView>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DepartmentTree;