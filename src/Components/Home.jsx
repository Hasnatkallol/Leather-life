
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Products from './Products';


const Home = () => {
    const products = useLoaderData();


    return (
        <div>
             <Banner />
             <Products products={products}></Products>
        </div>
    );
};

export default Home;





