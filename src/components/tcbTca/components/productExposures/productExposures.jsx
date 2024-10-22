import React, { useEffect, useState } from 'react'
import { Card } from '@mui/material/';
import Grid from '@mui/material/Grid2';
import ProductImg from '../../../../assets/product-img.svg'
import './productExposures.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const ProductExposures = () => {
    const tableHeaders = {
        name: "Material Group",
        quantity: "Quantity",
        ratio: "Ratio",
        price: "Price",
        margin: "Margin",
    }
    
    const productList = [
        {
            name: 'Cashew',
            quantity: {
                value: 46983,
                perc: 60
            },
            ratio: {
                value: 22.04,
                type: 'success'
            },
            price: {
                value: 4696,
                perc: 35.92
            },
            margin: {
                value: 4696,
                perc: 35.92
            }
        },
    ]

    const productItem = (product, i) =>
        <Grid key={i} container className="d-flex align-items-center justify-content-between flex-no-wrap product-item py-2">
            {Object.keys(tableHeaders).map((item, index) => 
                <>
                    {index === 0 
                    && <Grid key={index} size={1}>
                            <div className="d-flex flex-row align-items-center">
                                <img src={ProductImg} className='mr-3' alt='product img' />
                                <div className="d-flex align-items-center">
                                    <p className="p-0 m-0 product-item-title">{product[item]}</p>
                                </div>
                            </div>
                        </Grid>
                    }
                    {index === 1
                    && <p key={index} className="p-0 ml-auto mr-0 my-0 product-item-price text-right">{product[item].value}</p>}
                    {index === 2
                    && <p className={`p-1 pl-2 product-item-chip d-flex align-items-center text-right ml-auto ${product[item].type}`}>
                        {product[item].value}% <ArrowUpwardOutlinedIcon style={{transform: product[item].type === 'success' ? 'rotate(0deg)' : 'rotate(180deg)'}} fontSize='small' className='' />
                    </p>}
                    {(index === 3 || index === 4)
                    && <p key={index} className="p-0 ml-auto mr-0 my-0 d-flex align-items-center product-item-price justify-content-end">{product[item].value}</p>}
                </>
            )}
            {/* <p className="p-0 ml-auto mr-0 my-0 product-item-price text-right">1,256</p> */}
        </Grid>

    return (
        <Card className='custom-card p-3'>
            <div className="d-flex flex-column mb-4">
                <p className="cardTitle mx-0 mb-2 mt-0 p-0">Product Exposures</p>
                <p className="cardDesc m-0 p-0">Counted in Million Tons</p>
            </div>
            <div className="product-list d-flex flex-column w-100">
                {/** table header */}
                <Grid container className="d-flex align-items-center justify-content-between flex-no-wrap">
                    {Object.values(tableHeaders).map((item, index) => 
                    <>
                        {index > 0
                        ?   <p key={index} className="p-0 ml-auto mr-0 my-0 product-table-header text-right">{item}</p>
                        :   <Grid key={index} size={1}>
                                <p className="p-0 m-0 product-table-header text-left">{item}</p>
                            </Grid>
                        }
                    </>)}
                </Grid>

                {/** product item */}
                {productList.map((product, index) => 
                    <>{productItem(product, index)}</>
                )}
            </div>
        </Card>
    )
}

export default ProductExposures
