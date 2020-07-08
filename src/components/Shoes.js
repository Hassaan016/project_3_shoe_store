import React from 'react'
import { Outlet } from 'react-router-dom'

export const Shoes = () => {

    return (
        <div>
            <h2>Shoes</h2>
            <Outlet/>
        </div>
    )
}
