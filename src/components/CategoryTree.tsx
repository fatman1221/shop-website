'use client';

import { useState } from 'react';
import { CategoryNode, ProductInfo } from '@/lib/category-tree';

interface CategoryTreeProps {
  categories: CategoryNode[];
  level?: number;
  onCategoryClick?: (categoryId: string, products: ProductInfo[]) => void;
  selectedCategory?: string | null;
}

export default function CategoryTree({ categories, level = 0, onCategoryClick, selectedCategory }: CategoryTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const isExpanded = (nodeId: string) => expandedNodes.has(nodeId);

  const hasChildren = (node: CategoryNode) => {
    return (node.children && node.children.length > 0) || (node.products && node.products.length > 0);
  };

  const getIndentClass = (level: number) => {
    if (level === 0) return 'ml-0';
    if (level === 1) return 'ml-4';
    if (level === 2) return 'ml-8';
    if (level === 3) return 'ml-12';
    return 'ml-16';
  };

  const getNodeClass = (level: number, isSelected: boolean) => {
    const baseClass = isSelected ? 'text-green-600 font-medium' : '';
    if (level === 0) {
      return `text-xl font-bold py-3 ${baseClass}`;
    } else if (level === 1) {
      return `text-base font-semibold py-2 ${baseClass}`;
    } else if (level === 2) {
      return `text-sm font-medium py-1.5 ${baseClass}`;
    } else {
      return `text-sm py-1 ${baseClass}`;
    }
  };

  const handleCategoryClick = (category: CategoryNode) => {
    // 收集该分类及其所有子分类下的所有产品
    const allProducts: ProductInfo[] = [];
    
    const collectProducts = (node: CategoryNode) => {
      if (node.products) {
        allProducts.push(...node.products);
      }
      if (node.children) {
        node.children.forEach(collectProducts);
      }
    };
    
    collectProducts(category);
    
    if (allProducts.length > 0) {
      onCategoryClick?.(category.id, allProducts);
    }
  };

  return (
    <div className="space-y-1">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;
        const hasProducts = category.products && category.products.length > 0;
        
        return (
          <div key={category.id} className={getIndentClass(level)}>
            {/* 分类节点 */}
            <div 
              className={`flex items-center justify-between group hover:bg-gray-50 rounded-md px-3 py-2 transition-colors cursor-pointer ${
                isSelected ? 'bg-green-50 border-l-4 border-green-500' : ''
              } ${level === 0 ? 'border-b border-gray-200 pb-3 mb-2' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="flex items-center space-x-2 flex-1">
                {/* 展开/收起按钮 */}
                {hasChildren(category) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleNode(category.id);
                    }}
                    className="w-5 h-5 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${isExpanded(category.id) ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
                
                {/* 分类名称 */}
                <span className={getNodeClass(level, isSelected)}>
                  {category.nameEn}
                </span>
                
                {/* 产品数量 - 只在没有子分类且有产品时显示 */}
                {!category.children && hasProducts && (
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {category.products?.length || 0}
                  </span>
                )}
              </div>
            </div>

            {/* 子分类 */}
            {isExpanded(category.id) && category.children && category.children.length > 0 && (
              <div className="mt-1">
                <CategoryTree
                  categories={category.children}
                  level={level + 1}
                  onCategoryClick={onCategoryClick}
                  selectedCategory={selectedCategory}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
