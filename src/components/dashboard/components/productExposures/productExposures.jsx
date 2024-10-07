import React, { useEffect, useState } from 'react'
import { Card } from '@mui/material/';
import Grid from '@mui/material/Grid2';
import ProductImg from '../../../../assets/product-img.svg'
import './productExposures.scss';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const ProductExposures = () => {
    const tableHeaders = {
        name: "Material Group",
        sopInMt: "SOP in Metric Tons",
        sopInMil: "SOP in Million",
        closedInMt: "Closed in Metric Tons",
        closedInMil: "Closed in Million",
        closedGc: "Closed GC",
        longInMt: "Long in Metric Tons",
        longInMil: "Long in Million",
        longGc: "Long GC",
        shortInMt: "Short in Metric Tons",
        shortInMil: "Short in Million",
        shortGc: "Short GC",
        m2m: "M2M"
    }
    
    const productList = [
        {
            name: 'Almonds',
            sopInMt: 3659,
            sopInMil: 22.04,
            closedInMt: 2194,
            closedInMil: 12.71,
            closedGc: 1.07,
            longInMt: 727,
            longInMil: 4.13,
            longGc: 0.39,
            shortInMt: 1465,
            shortInMil: 9.33,
            shortGc: 1.73,
            m2m: 3.19
        },
        {
            name: 'Cashew',
            sopInMt: 3131,
            sopInMil: 21.78,
            closedInMt: 2916,
            closedInMil: 20.25,
            closedGc: 0.75,
            longInMt: 546,
            longInMil: 4.06,
            longGc: 0.23,
            shortInMt: 215,
            shortInMil: 1.53,
            shortGc: 0.09,
            m2m: 1.07
        },
        {
            name: 'Hazelnuts',
            sopInMt: 1327,
            sopInMil: 9.73,
            closedInMt: 789,
            closedInMil: 5.91,
            closedGc: "(0.01)",
            longInMt: 25,
            longInMil: 0.19,
            longGc: 0.01,
            shortInMt: 538,
            shortInMil: 3.82,
            shortGc: "-0.13",
            m2m: "-0.22"
        },
        {
            name: 'Pine Nuts',
            sopInMt: 1274,
            sopInMil: 27.61,
            closedInMt: 1008,
            closedInMil: 22.21,
            closedGc: 0.78,
            longInMt: 20,
            longInMil: 0.46,
            longGc: 0.01,
            shortInMt: 266,
            shortInMil: 5.41,
            shortGc: 0.62,
            m2m: 1.42
        },
        {
            name: 'Raisins',
            sopInMt: 2418,
            sopInMil: 8.10,
            closedInMt: 2226,
            closedInMil: 7.56,
            closedGc: 0.78,
            longInMt: 948,
            longInMil: 3.70,
            longGc: 0.52,
            shortInMt: 192,
            shortInMil: 0.54,
            shortGc: '(-0.08)',
            m2m: 1.22
        },
        {
            name: 'Walnuts',
            sopInMt: 2583,
            sopInMil: 15.94,
            closedInMt: 1969,
            closedInMil: 12.29,
            closedGc: 1.01,
            longInMt: 36,
            longInMil: 0.36,
            longGc: 0.02,
            shortInMt: 614,
            shortInMil: 3.66,
            shortGc: 0.33,
            m2m: 1.35
        },
    ]

    const productItem = (product, i) =>
        <Grid key={i} container className="d-flex align-items-center justify-content-between flex-no-wrap product-item py-2">
            {Object.keys(tableHeaders).map((item, index) => 
                <>
                    {index > 0 
                    ?  <p key={index} className="p-0 ml-auto mr-0 my-0  product-item-price text-right">{product[item]}</p>
                    :   <Grid key={index} size={1}>
                            <div className="d-flex flex-row align-items-center">
                                <img src={ProductImg} className='mr-3' alt='product img' />
                                <div className="d-flex flex-column">
                                    <p className="p-0 m-0 product-item-title">{product[item]}</p>
                                </div>
                            </div>
                        </Grid>
                    }
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
