
import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  DollarSign, 
  TrendingUp,
  Users,
  Warehouse,
  ShoppingCart,
  Activity
} from 'lucide-react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { StockMovementChart } from '@/components/dashboard/StockMovementChart';
import { CategoryDistribution } from '@/components/dashboard/CategoryDistribution';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockDashboardMetrics, mockProducts, mockTransactions } from '@/data/mockData';

export const Dashboard: React.FC = () => {
  const metrics = mockDashboardMetrics;
  const lowStockProducts = mockProducts.filter(p => p.status === 'low-stock' || p.status === 'out-of-stock');
  const recentTransactions = mockTransactions.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's an overview of your inventory system.
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">Export Report</Button>
          <Button>Add Product</Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          title="Total Products"
          value={metrics.totalProducts}
          change={{ value: 12, type: 'increase' }}
          icon={Package}
          color="blue"
        />
        <MetricCard
          title="Low Stock Alerts"
          value={metrics.lowStockAlerts}
          change={{ value: 2, type: 'decrease' }}
          icon={AlertTriangle}
          color="yellow"
        />
        <MetricCard
          title="Total Inventory Value"
          value={`$${metrics.totalValue.toLocaleString()}`}
          change={{ value: 8.2, type: 'increase' }}
          icon={DollarSign}
          color="green"
        />
        <MetricCard
          title="Recent Transactions"
          value={metrics.recentTransactions}
          change={{ value: 5.3, type: 'increase' }}
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <StockMovementChart data={metrics.stockMovement} />
        <CategoryDistribution data={metrics.topCategories} />
      </div>

      {/* Quick Actions & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span>Low Stock Alerts</span>
            </CardTitle>
            <CardDescription>
              Products that need immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lowStockProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="w-8 h-8 rounded object-cover" />
                      ) : (
                        <Package className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.sku}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={
                      product.status === 'out-of-stock' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }>
                      {product.quantity} units
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">
                      Reorder: {product.reorderPoint}
                    </p>
                  </div>
                </div>
              ))}
              {lowStockProducts.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No low stock alerts at the moment
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              Latest inventory transactions and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.type === 'inbound' 
                      ? 'bg-green-100 text-green-600' 
                      : transaction.type === 'outbound'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {transaction.type === 'inbound' ? '+' : transaction.type === 'outbound' ? '-' : '↔'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {transaction.productName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {transaction.type} • {Math.abs(transaction.quantity)} units • {transaction.user}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(transaction.timestamp).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">Active Users</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <Warehouse className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-gray-600">Warehouses</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-600">Pending Orders</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">Monthly Growth</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-1">+15%</p>
        </div>
      </div>
    </div>
  );
};
