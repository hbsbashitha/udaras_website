import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'
import useStyles from './styles'

// const products =[
//     {id: 1, name: 'Shoes', description:'nice shoes',price:'12$',image:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13328046/2021/2/25/528a8af0-9ae1-42a9-9ae7-2e52f87aa6701614252170655-Nike-React-Escape-Run-Womens-Running-Shoe-7461614252169541-1.jpg'},
//     {id: 2, name: 'Laptop', description:'nice laptop',price:'132$',image:'https://sm.ign.com/ign_ap/gallery/m/macbook-pr/macbook-pro-m1-review_n2nf.jpg'},
//     {id: 3, name: 'Car', description:'nice car',price:'134000$',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Regera_%28light_gradient%29.png/1200px-Regera_%28light_gradient%29.png'},
// ];

const Products =({products}) => {
    const classes=useStyles();
    
    return(
    <main className={classes.content}>
        <div className={ classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6}  md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))
            }
         </Grid> 
     </main>
     )

};

export default Products;