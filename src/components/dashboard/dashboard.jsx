import React, { useState } from 'react'
import Dashcard from './components/dashcards/dashcard'
import Grid from '@mui/material/Grid2';
import {Box} from '@mui/material/';
import SummaryChart from './components/summaryChart/summaryChart'
import TopSellingProducts from './components/topSellingProducts/topSellingProducts'
import ProductExposures from './components/productExposures/productExposures'
import PackageType from './components/packageType/packageType'
import GcChart from './components/gcChart/gcChart'
import CustomerChart from './components/customerChart/customerChart'

const Dashboard = () => {
  const [count, setCount] = useState(0)
  const dashCardData = [
    { title: 'Closed', desc: 'M2M for Aug 2024', blValue: '13,067 Mt', blLabel: 'Quantity', brValue: '$97 M', brLabel: 'Value', value: '$5.4 M', valueColor: '#FFAFCC', unit: 'GC', perc: '2.6', percDirection: 'top' },
    { title: 'Long', desc: 'M2M for Aug 2024', blValue: '2,650 Mt', blLabel: 'Quantity', brValue: '$15.5 M', brLabel: 'Value', value: '$1.48 M', valueColor: '#A2D2FF', unit: 'GC', perc: '9.6', percDirection: 'top' },
    { title: 'Short', desc: 'M2M for Aug 2024', blValue: '3,961 Mt', blLabel: 'Quantity', brValue: '$29 M', brLabel: 'Value', value: '$3.6 M', valueColor: '#D2B9DF', unit: 'GC', perc: '12.2', percDirection: 'top' },
    { title: 'Full Books', desc: 'M2M for Aug 2024', blValue: '19,679 Mt', blLabel: 'Quantity', brValue: '$142 M', brLabel: 'Value', value: '$10.5 M', valueColor: '#ADC178', unit: 'GC', perc: '7.4', percDirection: 'top' }
  ]

  return (
    <>
      <p className='mx-0 mt-0 mb-1 p-0 page-header'>Welcome Username!</p>
      <p className='mx-0 mt-0 mb-3 p-0 page-desc'>Here is your report for August 2024</p>
      <Grid container spacing={2} className='flex-balloon d-flex flex-row'>
          {/** top row */}
          {dashCardData.map(cardData => 
            <Grid size={2}>
              <Dashcard data={cardData} />
            </Grid>
          )}
          <Grid size={4}>
            <SummaryChart />
          </Grid>

          {/** full row table */}
          <Grid size={12}>
            <ProductExposures />
          </Grid>

          {/** new bottom row */}
          {/* <Grid size={6}>
            <div className="d-flex flex-column" style={{gap: '1.1rem'}}>
              <GcChart />
              <TopSellingProducts />
            </div>
          </Grid>

          <Grid size={6}>
            <div className="d-flex flex-column" style={{gap: '1.1rem'}}>
              <CustomerChart />
              <PackageType />
            </div>
          </Grid> */}


          {/** old bottom row */}
          <Grid size={3}>
            <TopSellingProducts />
          </Grid>
          <Grid size="grow">
            <div className="d-flex flex-column" style={{gap: '1.1rem'}}>
              <GcChart />
              <CustomerChart />
            </div>
          </Grid>
          <Grid size={4}>
            <PackageType />
          </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
