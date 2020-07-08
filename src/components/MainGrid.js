import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//>! Import
import { ProductIndex } from './ProductIndex';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 'auto',
    },
    paper: {
        textAlign: 'center',
        alignContent: 'center',
    },
    linkUnderLineRemove: {
        textDecoration: 'none',
    }
}));

export const HomeGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3} >
                        Shoes
                        <Link to="shoes" className={classes.linkUnderLineRemove}> {/*Any element within <Link>__Elements__</Link> becomes linkable*/}
                            {<img className="img-element" src={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"} alt="shoes"></img>}
                        </Link>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3} >
                        Mobiles
                        {<img className="img-element" src={"https://cdn.shopify.com/s/files/1/0275/0644/2300/products/product_783_3_thumb_910b143b-c09f-423b-b43f-15fe3424fc41_1024x.jpg?v=1573584045"} alt="mobiles"></img>}
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3} >
                        Laptops
                        {<img className="img-element" src={"https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/i/microsoft_surface_laptop_3_-_cobalt_blue1_-_tejar_3.jpg"} alt="laptops"></img>}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export const ProductItemGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ProductIndex />
                </Grid>
            </Grid>
        </div>
    );
}