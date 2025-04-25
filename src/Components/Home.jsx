
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Products from './Products';
import { useState } from 'react';



const Home = () => {
    const products = useLoaderData();
    
    const [ search, setSearch ]  = useState('')

    const handleSearch = (e) => {
           setSearch(e.target.value)
    }

    const searchProducts = products.filter(product => 
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    )
   

    return (
        <div>
             <Banner handleSearch={handleSearch}/>
             <Products products={searchProducts}></Products>
        </div>
    );
};

export default Home;





