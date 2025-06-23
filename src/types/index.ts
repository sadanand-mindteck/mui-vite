export interface DashboardData {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
  status: 'Active' | 'Inactive';
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
}

export interface ChartData {
  name: string;
  value: number;
}