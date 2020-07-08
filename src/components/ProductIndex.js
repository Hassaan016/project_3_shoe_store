import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { ShoeIndex } from './ShoeIndex';

import './ProductIndex.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        '& > *': {
            width: 'auto',
        },
    },
}));


export const ProductIndex = () => {
    const classes = useStyles();

    const mobiles = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://cdn.shopify.com/s/files/1/0275/0644/2300/products/product_783_3_thumb_910b143b-c09f-423b-b43f-15fe3424fc41_1024x.jpg?v=1573584045"
        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://images.priceoye.pk/samsung-galaxy-note-10-plus-pakistan-priceoye-0dm16.jpg"
        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://images.priceoye.pk/xiaomi-redmi-note-9s-pakistan-priceoye-wh3w0.jpg"
        }
    };

    const laptops = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/i/microsoft_surface_laptop_3_-_cobalt_blue1_-_tejar_3.jpg"
        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/r/a/razer_blade_15_gaming_laptop_-_tejar_5.jpg"
        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://mrlaptop.pk/wp-content/uploads/2019/11/HP-15-Dw0078-laptop-price-in-pakistan.jpg"
        }
    };

    return (
        <>
            <div >
                <ShoeIndex strShoeRouteLink="/shoes/"/>
            </div >

            <br />
            <div className={classes.root}>
                <h3>Mobiles</h3>
                {/* <ul className="ul-container">  */}
                {Object.entries(mobiles).map(([productID, { name, img }]) =>
                    <Paper className="paper-container" elevation={3} >
                        {/* <li className="li-container" key={productID}>  */}

                        <Link to={productID}> {/*Any element within <Link>__Elements__</Link> becomes linkable*/}
                            <h4>{name}</h4>
                            {<img className="img-element" src={img} alt={name}></img>}
                        </Link>

                        {/* </li>  */}
                    </Paper>
                )}
                {/* </ul>  */}
            </div >

            <br />
            <h3>Laptops</h3>
            <div className={classes.root}>
                {/* <ul className="ul-container">  */}
                {Object.entries(laptops).map(([productID, { name, img }]) =>
                    <Paper className="paper-container" elevation={3} >
                        {/* <li className="li-container" key={productID}>  */}

                        <Link to={productID}> {/*Any element within <Link>__Elements__</Link> becomes linkable*/}
                            <h4>{name}</h4>
                            {<img className="img-element" src={img} alt={name}></img>}
                        </Link>

                        {/* </li>  */}
                    </Paper>
                )}
                {/* </ul>  */}
            </div>
            <br />
        </>
    )
}
