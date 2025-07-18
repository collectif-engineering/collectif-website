'use client';
import React, { useState } from 'react';
import styles from '@/styles/portfolio.module.css';
import { portfolioData } from "@/seed/seed";
import { ProductGrid } from '@/components/portfolio-grid/PortfolioGrid';
import { PortfolioFilter } from '@/components/portfolio-filter/PortfolioFilter';
import InfinitScroll from '@/components/infinit-scroll/InfinitScroll';

const data = portfolioData.portfolio;

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredData = selectedCategory === 'all' ? data : data.filter((data) => data.category.toUpperCase() === selectedCategory.toUpperCase());

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.container} id="work">
      <div className={ styles.stickyHeader}>   
        <InfinitScroll textLine='WORK' quantity={5} width='450px' height='100px'/>
      </div>
      <PortfolioFilter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
      <ProductGrid dataPortfolio={filteredData} selectedCategory={selectedCategory}/>
    </div>
  );
};

export default Portfolio;
