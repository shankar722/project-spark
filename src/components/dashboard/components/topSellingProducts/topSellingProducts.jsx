import React, { useEffect, useState } from 'react'
import {Card} from '@mui/material/';
import ProductImg from '../../../../assets/product-img.svg'
import './topSellingProducts.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const TopSellingProducts = () => {

    const productList = [
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'danger'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'danger'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'danger'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'danger'},
        {name: 'Product Name', desc: 'Caption goes here', price: '579', perc: '2.6', type: 'success'}
    ]

    const productItem = (name, desc, price, perc, type, index) => 
    <div className="product-item d-flex flex-row align-items-center py-1">
        <img src={ProductImg} className='mr-3' alt='product img'  />
        <div className="d-flex flex-column">
            <p className="p-0 m-0 product-item-title">{name}</p>
            <p className="p-0 m-0 product-item-desc">{desc}</p>
        </div>
        <p className="p-0 ml-auto mr-2 my-0 product-item-price">{price}</p>
        <p className={`pr-1 py-1 pl-0 product-item-chip ${type}`}>
            <ArrowUpwardOutlinedIcon style={{transform: type === 'success' ? 'rotate(0deg)' : 'rotate(180deg)'}} fontSize='small' className='' /> {perc}%
        </p>
    </div>
    
    return (
        <Card className='custom-card p-3'>
            <div className="d-flex flex-column mb-4">
                <p className="cardTitle m-0 p-0">Top Selling Products</p>
                <p className="cardDesc m-0 p-0">list of top selling products</p>
            </div>
            <div className="product-list d-flex flex-column w-100">
                {/** product item */}
                {productList.map((product, index) => productItem(product.name, product.desc, product.price, product.perc, product.type, index))}
            </div>
        </Card>
    )
}

export default TopSellingProducts
