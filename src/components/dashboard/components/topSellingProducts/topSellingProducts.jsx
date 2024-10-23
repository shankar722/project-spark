import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Card} from '@mui/material/';
import Grid from '@mui/material/Grid2';
import ProductImg from '../../../../assets/product-img.svg'
import './topSellingProducts.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const TopSellingProducts = () => {
    const navigate = useNavigate();
    const productList = [
        {name: 'Pine Nuts', price: '31.65', gc: '(0.10)', perc: '-0.3', type: 'danger'},
        {name: 'Almonds', price: '29.90', gc: '1.38', perc: '4.6', type: 'success'},
        {name: 'Cashews', price: '25.09', gc: '1.39', perc: '5.5', type: 'success'},
        {name: 'Walnuts', price: '16.73', gc: '2.56', perc: '15.3', type: 'success'},
        {name: 'Hazelnuts', price: '15.88', gc: '0.74', perc: '4.7', type: 'success'},
        {name: 'Pistachios', price: '8.34', gc: '0.55', perc: '6.6', type: 'success'},
        {name: 'Raisins', price: '6.19', gc: '(0.10)', perc: '-1.1', type: 'danger'},
        {name: 'Brazil Nuts', price: '3.73', gc: '0.22', perc: '5.9', type: 'success'},
        {name: 'Pecans', price: '3.19', gc: '0.06', perc: '2.0', type: 'success'},
        {name: 'Pumpkin Seeds', price: '0.83', gc: '0.00', perc: '0.4', type: 'success'}
    ]

    const productItem = (name, desc, price, gc, perc, type, index) => 
    <Grid container className="product-item d-flex flex-row align-items-center py-1" sx={{cursor: 'pointer'}} onClick={() => navigate('/tcbTca')}>
        <Grid size={4} className="d-flex align-items-center">
            <img src={ProductImg} className='mr-3' alt='product img'  />
            <p className="p-0 m-0 product-item-title">{name}</p>
        </Grid>
        <Grid size={3}><p className="p-0 m-0 product-item-price text-right ml-auto">{price}</p></Grid>
        <Grid size={2}><p className="p-0 m-0 product-item-price text-right ml-auto">{gc}</p></Grid>
        <Grid size={3}><p className={`pr-1 py-1 pl-0 product-item-chip text-right ml-auto ${type}`}>
            <ArrowUpwardOutlinedIcon style={{transform: type === 'success' ? 'rotate(0deg)' : 'rotate(180deg)'}} fontSize='small' className='' /> {perc}%
        </p></Grid>
    </Grid>
    
    return (
        <Card className='custom-card p-3 top-selling-products'>
            <div className="d-flex flex-column mb-4">
                <p className="cardTitle m-0 p-0">Top Selling Products</p>
                <p className="cardDesc m-0 p-0">list of top selling products</p>
            </div>
            <Grid container>
                <Grid size={4}>
                    <p className="p-0 m-0 product-table-header">Product</p>
                </Grid>
                <Grid size={3}><p className="p-0 ml-auto mr-0 my-0  product-table-header text-right">Sales</p></Grid>
                <Grid size={2}><p className="p-0 ml-auto mr-0 my-0  product-table-header text-right">GC</p></Grid>
                <Grid size={3}><p className="p-0 ml-auto mr-0 my-0  product-table-header text-right">GC%</p></Grid>
            </Grid>
            <div className="product-list d-flex flex-column w-100">
                {/** product item */}
                {productList.map((product, index) => productItem(product.name, product.desc, product.price, product.gc, product.perc, product.type, index))}
            </div>
        </Card>
    )
}

export default TopSellingProducts
