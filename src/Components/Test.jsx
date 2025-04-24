import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Products from './Products';
import { useLoaderData } from 'react-router-dom'; // correct import

const Test = () => {
    const products = useLoaderData();

    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Category');

    useEffect(() => {
        const uniqueCategory = ['All Category', ...new Set(products.map(product => product.category))];
        setCategory(uniqueCategory);
    }, [products]);

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const filteredProducts = selectedCategory === 'All Category'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            <Banner />
            <div className="flex gap-4 flex-wrap justify-center my-4">
                {category.map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`px-4 py-2 rounded ${
                            selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <Products products={filteredProducts} />
        </div>
    );
};

export default Test;
