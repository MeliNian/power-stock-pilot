
import { Product, Warehouse, Order, InventoryTransaction, DashboardMetrics } from '@/types/inventory';

export const mockProducts: Product[] = [
  {
    id: '1',
    sku: 'ELEC-001',
    name: 'Wireless Headphones',
    description: 'Premium wireless bluetooth headphones with noise cancellation',
    category: 'Electronics',
    quantity: 45,
    reorderPoint: 10,
    unitPrice: 199.99,
    supplier: 'TechSupply Co.',
    location: 'A1-B2',
    warehouse: 'Main Warehouse',
    status: 'in-stock',
    lastUpdated: '2024-01-15T10:30:00Z',
    barcode: '1234567890123',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    sku: 'FURN-002',
    name: 'Office Chair',
    description: 'Ergonomic office chair with lumbar support',
    category: 'Furniture',
    quantity: 8,
    reorderPoint: 15,
    unitPrice: 299.99,
    supplier: 'Office Solutions Ltd.',
    location: 'C3-A1',
    warehouse: 'Main Warehouse',
    status: 'low-stock',
    lastUpdated: '2024-01-14T15:20:00Z',
    barcode: '2345678901234',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    sku: 'STAT-003',
    name: 'Premium Notebook Set',
    description: 'Set of 3 premium notebooks with leather covers',
    category: 'Stationery',
    quantity: 0,
    reorderPoint: 20,
    unitPrice: 49.99,
    supplier: 'Paper Plus Inc.',
    location: 'B2-C1',
    warehouse: 'Secondary Warehouse',
    status: 'out-of-stock',
    lastUpdated: '2024-01-13T09:15:00Z',
    barcode: '3456789012345'
  },
  {
    id: '4',
    sku: 'ELEC-004',
    name: 'Smartphone',
    description: 'Latest model smartphone with advanced camera',
    category: 'Electronics',
    quantity: 23,
    reorderPoint: 5,
    unitPrice: 899.99,
    supplier: 'Mobile Tech Corp.',
    location: 'A2-B1',
    warehouse: 'Main Warehouse',
    status: 'in-stock',
    lastUpdated: '2024-01-15T14:45:00Z',
    barcode: '4567890123456',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop'
  },
  {
    id: '5',
    sku: 'FURN-005',
    name: 'Standing Desk',
    description: 'Adjustable height standing desk',
    category: 'Furniture',
    quantity: 12,
    reorderPoint: 8,
    unitPrice: 599.99,
    supplier: 'Office Solutions Ltd.',
    location: 'C1-A2',
    warehouse: 'Main Warehouse',
    status: 'in-stock',
    lastUpdated: '2024-01-14T11:30:00Z',
    barcode: '5678901234567'
  }
];

export const mockWarehouses: Warehouse[] = [
  {
    id: '1',
    name: 'Main Warehouse',
    location: 'New York, NY',
    manager: 'Sarah Johnson',
    capacity: 10000,
    currentStock: 7834,
    status: 'active'
  },
  {
    id: '2',
    name: 'Secondary Warehouse',
    location: 'Los Angeles, CA',
    manager: 'Mike Chen',
    capacity: 5000,
    currentStock: 3245,
    status: 'active'
  },
  {
    id: '3',
    name: 'Distribution Center East',
    location: 'Atlanta, GA',
    manager: 'Emily Davis',
    capacity: 8000,
    currentStock: 5621,
    status: 'active'
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    type: 'purchase',
    orderNumber: 'PO-2024-001',
    supplier: 'TechSupply Co.',
    items: [
      {
        productId: '1',
        productName: 'Wireless Headphones',
        quantity: 50,
        unitPrice: 150.00,
        totalPrice: 7500.00
      }
    ],
    totalAmount: 7500.00,
    status: 'pending',
    orderDate: '2024-01-15T08:00:00Z',
    expectedDelivery: '2024-01-22T08:00:00Z'
  },
  {
    id: '2',
    type: 'sales',
    orderNumber: 'SO-2024-001',
    customer: 'ABC Corporation',
    items: [
      {
        productId: '4',
        productName: 'Smartphone',
        quantity: 5,
        unitPrice: 899.99,
        totalPrice: 4499.95
      }
    ],
    totalAmount: 4499.95,
    status: 'shipped',
    orderDate: '2024-01-14T10:30:00Z',
    expectedDelivery: '2024-01-16T10:30:00Z'
  }
];

export const mockTransactions: InventoryTransaction[] = [
  {
    id: '1',
    productId: '1',
    productName: 'Wireless Headphones',
    type: 'inbound',
    quantity: 25,
    previousQuantity: 20,
    newQuantity: 45,
    reason: 'Stock replenishment',
    user: 'John Smith',
    timestamp: '2024-01-15T10:30:00Z',
    warehouse: 'Main Warehouse'
  },
  {
    id: '2',
    productId: '4',
    productName: 'Smartphone',
    type: 'outbound',
    quantity: 5,
    previousQuantity: 28,
    newQuantity: 23,
    reason: 'Sales order SO-2024-001',
    user: 'Sarah Johnson',
    timestamp: '2024-01-14T14:45:00Z',
    warehouse: 'Main Warehouse'
  },
  {
    id: '3',
    productId: '2',
    productName: 'Office Chair',
    type: 'adjustment',
    quantity: -2,
    previousQuantity: 10,
    newQuantity: 8,
    reason: 'Damaged items removed',
    user: 'Mike Chen',
    timestamp: '2024-01-14T15:20:00Z',
    warehouse: 'Main Warehouse'
  }
];

export const mockDashboardMetrics: DashboardMetrics = {
  totalProducts: 88,
  lowStockAlerts: 3,
  totalValue: 284750.50,
  recentTransactions: 47,
  topCategories: [
    { name: 'Electronics', count: 35 },
    { name: 'Furniture', count: 28 },
    { name: 'Stationery', count: 15 },
    { name: 'Supplies', count: 10 }
  ],
  stockMovement: [
    { date: '2024-01-08', inbound: 120, outbound: 85 },
    { date: '2024-01-09', inbound: 95, outbound: 110 },
    { date: '2024-01-10', inbound: 150, outbound: 75 },
    { date: '2024-01-11', inbound: 80, outbound: 95 },
    { date: '2024-01-12', inbound: 110, outbound: 120 },
    { date: '2024-01-13', inbound: 90, outbound: 80 },
    { date: '2024-01-14', inbound: 130, outbound: 100 },
  ]
};
