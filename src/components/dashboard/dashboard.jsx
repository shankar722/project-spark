import React, { useState } from 'react'
import Dashcard from './components/dashcards/dashcard'
import Grid from '@mui/material/Grid2';
import {Box} from '@mui/material/';
import SummaryChart from './components/summaryChart/summaryChart'
import TopSellingProducts from './components/topSellingProducts/topSellingProducts'
import ProductExposures from './components/productExposures/productExposures'
import PackageType from './components/packageType/packageType'
import GcChart from './components/gcChart/gcChart'

const Dashboard = () => {
  const [count, setCount] = useState(0)
  const dashCardData = [
    { title: 'Closed', desc: 'M2M for Aug 2024', blValue: '13,067 Mt', blLabel: 'Quantity', brValue: '$97 M', brLabel: 'Value', value: '$5.4 M', valueColor: '#FFAFCC', unit: 'GC', perc: '2.6', percDirection: 'top' },
    { title: 'Closed', desc: 'M2M for Aug 2024', blValue: '13,067 Mt', blLabel: 'Quantity', brValue: '$97 M', brLabel: 'Value', value: '$5.4 M', valueColor: '#A2D2FF', unit: 'GC', perc: '2.6', percDirection: 'top' },
    { title: 'Closed', desc: 'M2M for Aug 2024', blValue: '13,067 Mt', blLabel: 'Quantity', brValue: '$97 M', brLabel: 'Value', value: '$5.4 M', valueColor: '#D2B9DF', unit: 'GC', perc: '2.6', percDirection: 'top' },
    { title: 'Closed', desc: 'M2M for Aug 2024', blValue: '13,067 Mt', blLabel: 'Quantity', brValue: '$97 M', brLabel: 'Value', value: '$5.4 M', valueColor: '#ADC178', unit: 'GC', perc: '2.6', percDirection: 'top' }
  ]

  return (
    <>
      <span>Dashboard</span>
      <Grid container spacing={2} className='flex-balloon d-flex flex-row'>
          {dashCardData.map(cardData => 
            <Grid size={2}>
              <Dashcard data={cardData} />
            </Grid>
          )}
          <Grid size={4}>
            <SummaryChart />
          </Grid>

          <Grid size={12}>
            <ProductExposures />
          </Grid>

          <Grid size={3}>
            <TopSellingProducts />
          </Grid>
          <Grid size="grow">
            <div className="d-flex flex-column" style={{gap: '1.1rem'}}>
              <GcChart />
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
