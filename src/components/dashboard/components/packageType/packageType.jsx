import React, { useEffect, useState } from 'react'
import { Card } from '@mui/material/';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import ProductImg from '../../../../assets/product-img.svg'
import './packageType.scss';

const BorderLinearProgress = styled(LinearProgress)(({ theme, colorFill = '#308fe8', colorBg = theme.palette.grey[800] }) => ({
    height: 8,
    width: 120,
    marginLeft: 'auto',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: colorBg,
      ...theme.applyStyles('dark', {
        backgroundColor: colorBg,
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorFill,
      ...theme.applyStyles('dark', {
        backgroundColor: colorFill,
      }),
    },
  }));

const PackageType = () => {

    const productList = [
        {name: 'Doypouch', desc: 'Packing', value: 65, colorFill: 'rgba(0, 217, 217, 1)', colorBg: 'rgba(220, 253, 253, 1)'},
        {name: 'Pillow Pouch', desc: 'Packing', value: 87, colorFill: 'rgba(255, 199, 0, 1)', colorBg: 'rgba(255, 248, 221, 1)'},
        {name: '4 Seal', desc: 'Packing', value: 44, colorFill: 'rgba(114, 57, 234, 1)', colorBg: 'rgba(248, 245, 255, 1)'},
        {name: 'Tin', desc: 'Packing', value: 70, colorFill: 'rgba(0, 158, 247, 1)', colorBg: 'rgba(236, 248, 255, 1)'}
    ]

    const productItem = (name, desc, value, colorFill, colorBg, index) => 
    <div className="product-item d-flex flex-row align-items-center py-3">
        <img src={ProductImg} className='mr-3' alt='product img'  />
        <div className="d-flex flex-column">
            <p className="p-0 mt-0 mx-0 mb-0 product-item-title">{name}</p>
            <p className="p-0 m-0 product-item-desc">{desc}</p>
        </div>
        <BorderLinearProgress variant="determinate" value={value} colorBg={colorBg} colorFill={colorFill} />
        <span className='package-type-value ml-3'>{value}%</span>
    </div>
    
    return (
        <Card className='custom-card p-3'>
            <div className="d-flex flex-column mb-4">
                <p className="cardTitle mt-0 mb-2 mx-0 p-0">Package Type</p>
                <p className="cardDesc m-0 p-0">Overall summary for last year</p>
            </div>
            <div className="product-list d-flex flex-column w-100">
                {/** product item */}
                {productList.map((product, index) => productItem(product.name, product.desc, product.value, product.colorFill, product.colorBg, index))}
            </div>
        </Card>
    )
}

export default PackageType
