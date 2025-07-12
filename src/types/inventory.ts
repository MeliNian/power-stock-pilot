
export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  reorderPoint: number;
  unitPrice: number;
  supplier: string;
  location: string;
  warehouse: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  lastUpdated: string;
  barcode?: string;
  image?: string;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  manager: string;
  capacity: number;
  currentStock: number;
  status: 'active' | 'inactive';
}

export interface Order {
  id: string;
  type: 'purchase' | 'sales';
  orderNumber: string;
  customer?: string;
  supplier?: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  expectedDelivery?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface InventoryTransaction {
  id: string;
  productId: string;
  productName: string;
  type: 'inbound' | 'outbound' | 'adjustment' | 'transfer';
  quantity: number;
  previousQuantity: number;
  newQuantity: number;
  reason: string;
  user: string;
  timestamp: string;
  warehouse: string;
}

export interface DashboardMetrics {
  totalProducts: number;
  lowStockAlerts: number;
  totalValue: number;
  recentTransactions: number;
  topCategories: Array<{ name: string; count: number }>;
  stockMovement: Array<{ date: string; inbound: number; outbound: number }>;
}
