import React from 'react';
import { Header } from './components/Header.js';
import { Home } from './components/Home.js';
import { Products } from './components/Products.js';
import { Shoes } from './components/Shoes.js';
import { ShoeIndex } from './components/ShoeIndex.js';
import { ProductDetails } from './components/ProductDetails.js';
import { PageNotFound } from './components/PageNotFound.js';
import { ProductItemGrid } from './components/MainGrid.js';

import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div >
      <Header />

      <Routes>

        <Route path="/" element={<Home />}>
        </Route>

        <Route path="shoes" element={<Shoes/>}> {/* The parent shoes route i.e /shoes*/}
        <Route path="/" element={<ShoeIndex />}></Route> {/* Show this when we are on the parent shoes route i.e /shoes*/}
          <Route path=":productID" element={<ProductDetails />}></Route>  {/*/shoes/any_product_item */}
        </Route> 

        <Route path="products" element={<Products />}> {/* The parent Products route i.e /products*/}
          <Route path="/" element={<ProductItemGrid />}></Route> {/* Show this when we are on the parent Products route i.e /products*/}
          <Route path=":productID" element={<ProductDetails />}></Route>  {/*/products/any_product_item */}
        </Route>

        {<Route path="*" element={<PageNotFound />}></Route>}

      </Routes> {/*End of Routes */}

    </div>
  );
}

export default App;
