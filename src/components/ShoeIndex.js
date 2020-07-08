import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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


export const ShoeIndex = ({ strShoeRouteLink }) => {
    const classes = useStyles();

    const shoes = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
    };


    return (
        <div className={classes.root}>
            <h3>Shoes</h3>
            {/* <ul className="ul-container">  */}
            {Object.entries(shoes).map(([productID, { name, img }]) =>
                <Paper className="paper-container" elevation={3} >
                    {/* <li className="li-container" key={productID}>  */}

                    <Link to={"".concat(strShoeRouteLink, productID)}> {/*Any element within <Link>__Elements__</Link> becomes linkable*/}
                        <h4>{name}</h4>
                        {<img className="img-element" src={img} alt={name}></img>}
                    </Link>

                    {/* </li>  */}
                </Paper>
            )}
            {/* </ul>  */}
        </div >
    )
}
