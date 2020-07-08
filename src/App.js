import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header.js';
import { Home } from './components/Home.js';
import { Products } from './components/Products.js';
import { ProductIndex } from './components/ProductIndex.js';
import { ShoeDetails } from './components/ShoeDetails.js';
import { Shoes } from './components/Shoes.js';
import { ShoeIndex } from './components/ShoeIndex.js';
import { PageNotFound } from './components/PageNotFound.js';

import './App.css';

function App() {
  return (
    <div >
      <Header />

      <Routes>

        <Route path="/" element={<Home />}>
        </Route>

        <Route path="shoes" element={<Shoes/>}> {/* The parent shoes route i.e /shoes*/}
          <Route path="/" element={<ShoeIndex strShoeRouteLink=""/>}></Route> {/* Show <ShoeIndex/> when we are on the parent shoes route i.e /shoes*/}
          <Route path=":productID" element={<ShoeDetails />}></Route>  {/*/shoes/any_product_item */}
        </Route> 

        <Route path="products" element={<Products />}> {/* The parent Products route i.e /products*/}
          <Route path="/" element={<ProductIndex />}></Route> {/* Show <ProductIndex/> when we are on the parent Products route i.e /products*/}
          <Route path=":productID" element={<ShoeDetails />}></Route>  {/*/products/any_product_item */}
        </Route>

        {<Route path="*" element={<PageNotFound />}></Route>}

      </Routes> {/*End of Routes */}

    </div>
  );
}

export default App;
