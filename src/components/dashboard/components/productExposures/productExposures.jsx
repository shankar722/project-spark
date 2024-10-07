import React, { useEffect, useState } from 'react'
import {Card} from '@mui/material/';
import Grid from '@mui/material/Grid2';
import ProductImg from '../../../../assets/product-img.svg'
import './productExposures.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const ProductExposures = () => {

    const productList = [
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'danger'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'danger'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'}
    ]

    const productItem = (name, desc, price, perc, type, index) => 
    <Grid container>
        <Grid size={6}>
            <div className="d-flex flex-row align-items-center">
                <img src={ProductImg} className='mr-3' alt='product img'  />
                <div className="d-flex flex-column">
                    <p className="p-0 m-0 product-item-title">{name}</p>
                </div>
            </div>
        </Grid>
        <Grid size={2}>
            <p className="p-0 ml-auto mr-0 my-0 product-item-price text-right">1,256</p>
        </Grid>
        <Grid size={2}>
            <p className="p-0 ml-auto mr-0 my-0 product-item-price text-right">2.63</p>
        </Grid>
        <Grid size={2}>
            <p className="p-0 ml-auto mr-0 my-0 product-item-price text-right">2.63</p>
        </Grid>
    </Grid>
    
    return (
        <Card className='custom-card p-3'>
            <div className="d-flex flex-column mb-4">
                <p className="cardTitle mx-0 mb-2 mt-0 p-0">Product Exposures</p>
                <p className="cardDesc m-0 p-0">Counted in Million Tons</p>
            </div>
            <div className="product-list d-flex flex-column w-100">
                {/** product item */}
                <Grid container>
                    <Grid size={6}>
                        <p className="p-0 m-0 product-table-header text-left">Product</p>
                    </Grid>
                    <Grid size={2}>
                        <p className="p-0 m-0 product-table-header text-right">Long</p>
                    </Grid>
                    <Grid size={2}>
                        <p className="p-0 m-0 product-table-header text-right">Short</p>
                    </Grid>
                    <Grid size={2}>
                        <p className="p-0 m-0 product-table-header text-right">Net</p>
                    </Grid>
                </Grid>
                {/** product item */}
                {productList.map((product, index) => <div className="product-item py-2">{productItem(product.name, product.desc, product.price, product.perc, product.type, index)}</div>)}
            </div>
        </Card>
    )
}

export default ProductExposures
