import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ products }) => {

    const allProducts = products;

    const [ categories , setCategories ] = useState([])
    const [ selectedCategory , setSelectedCategory ] = useState("All Products")
    const [ displayProducts, setDisplayProducts] = useState([])
    const [ showAll, setShowAll ] = useState(false)

    useEffect(()=>{

        const filterProducts = selectedCategory === 'All Products' 
        ? allProducts 
        : allProducts.filter(item => item.category === selectedCategory)

        const uniqueCategory = ["All Products", ... new Set(allProducts.map(category => category.category))]
        setCategories(uniqueCategory)
        if(showAll){
            setDisplayProducts(filterProducts)
        }
        else{
            setDisplayProducts(filterProducts.slice(0,6))
        }
             
    },[allProducts,selectedCategory,showAll])

    const handleCategory = (item) => {
        setSelectedCategory(item)
    }



    return (
       <div>
           <div className='w-11/12 mx-auto flex justify-center items-center my-5  lg:my-10  gap-2 lg:gap-5'>
           {
            categories.map((cat,index) => <button  onClick={()=>handleCategory(cat)} key={index}       className={`w-30 h-8 lg:w-50 lg:h-15 text-xs lg:text-3xl font-medium  rounded-2xl border-none text-center justify-center items-center 
                ${selectedCategory === cat 
                  ? 'bg-[#dcc40f] text-black' 
                  : 'bg-[#0b5361] hover:bg-[#257282] text-white'}`
              }
            >
                {cat}</button> )
           }
           </div>

           <div className='grid grid-cols-1 md:grid lg:grid-cols-3 w-11/12 mx-auto gap-5'>
               {
                displayProducts.map((products,index) => <Product key={index} products={products}></Product>)
               }
           </div>
           <button onClick={()=>{
            setShowAll(prev=> !prev)
            if (showAll) window.scroll(0,400)
           }} className='btn my-5 text-center justify-center items-center flex mx-auto'> { showAll ? 'Show Less' : 'Show All'} </button>
       </div>
    );
};

export default Products;



