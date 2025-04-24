import React, { useState } from 'react';
import { CartContext } from './Context';

const Cartprovider = ({children}) => {
    const [ searchText, setSearchText ] = useState()
    return (
       <CartContext.Provider value={ { searchText, setSearchText } }>
          {children}
       </CartContext.Provider>
    );
};

export default Cartprovider;