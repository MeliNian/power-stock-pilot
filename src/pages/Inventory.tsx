
import React, { useState } from 'react';
import { Plus, Filter, Download, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductTable } from '@/components/inventory/ProductTable';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types/inventory';
import { toast } from '@/components/ui/sonner';

export const Inventory: React.FC = () => {
  const [products] = useState<Product[]>(mockProducts);

  const handleEdit = (product: Product) => {
    toast.info('Edit Product', {
      description: `Editing ${product.name} - This would open an edit dialog.`,
    });
  };

  const handleDelete = (product: Product) => {
    toast.error('Delete Product', {
      description: `This would delete ${product.name} after confirmation.`,
    });
  };

  const handleView = (product: Product) => {
    toast.info('View Product', {
      description: `Viewing details for ${product.name} - This would show a detail modal.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">
            Manage your products, track stock levels, and monitor inventory health.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-sm font-medium text-gray-600">Total Products</div>
          <div className="text-2xl font-bold text-gray-900">{products.length}</div>
          <div className="text-xs text-green-600">+2 this week</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-sm font-medium text-gray-600">In Stock</div>
          <div className="text-2xl font-bold text-green-600">
            {products.filter(p => p.status === 'in-stock').length}
          </div>
          <div className="text-xs text-gray-500">Active products</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-sm font-medium text-gray-600">Low Stock</div>
          <div className="text-2xl font-bold text-yellow-600">
            {products.filter(p => p.status === 'low-stock').length}
          </div>
          <div className="text-xs text-yellow-600">Need attention</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-sm font-medium text-gray-600">Out of Stock</div>
          <div className="text-2xl font-bold text-red-600">
            {products.filter(p => p.status === 'out-of-stock').length}
          </div>
          <div className="text-xs text-red-600">Requires restock</div>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-lg border">
        <div className="p-6">
          <ProductTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        </div>
      </div>
    </div>
  );
};
