import React from 'react'
import { Outlet } from 'react-router-dom'

export const Products = () => {

    return (
        <div>
            <h2>Products</h2>
            <Outlet/>
        </div>
    )
}
