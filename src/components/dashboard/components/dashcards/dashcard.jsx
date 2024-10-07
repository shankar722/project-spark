import React, { useState } from 'react'
import {Card, Button} from '@mui/material/';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import './dashcard.scss'

const Dashcard = ({data = {title: '', desc: '', blValue: '', blLabel: '', brValue: '', brLabel: '', value: '', valueColor: '', unit: '', perc: '', percDirection: 'top'}}) => {
  const [count, setCount] = useState(0)
  const {title, desc, blValue, blLabel, brValue, brLabel, value, valueColor, unit, perc, percDirection} = data;

  // title desc container
  const titleDescContainer = (position, alignment, label, desc) => 
  <div 
    className={`title-desc-container d-flex flex-column 
    justify-content-${position === 'top' ? 'start' : 'end'}
    align-items-${alignment === 'left' ? 'start' : 'end'}
    `}>
    <p className="cardTitle m-0 p-0">{label}</p>
    <p className="cardDesc m-0 p-0">{desc}</p>
  </div>

  return (
    <Card className='custom-card p-3'>
      {/** Card top section */}
      <div className="d-flex align-items-center justify-content-between mb-2">
        {titleDescContainer('top', 'left', title, desc)}
        <MoreHorizOutlinedIcon className='cursor-pointer' />
      </div>

      {/** Card middle section */}
      {/** outer circle */}
      <div 
        className='d-flex flex-column align-items-center justify-content-center p-2 mx-auto'
        style={{height: 127, width: 127, border: `4px solid ${valueColor}`, borderRadius: '100%'}}
      >
         {/** inner circle */}
         <div 
            className='d-flex flex-column align-items-center justify-content-center m-0 p-0'
            style={{height: 119, width: 119, border: `4px solid ${valueColor}`, borderRadius: '100%'}}
          >
            <p className="cardTitle m-0 p-0">{value}</p>
            <p className="cardDesc m-0 p-0">{unit}</p>
            <p className="perc m-0 p-0 d-flex align-items-center" style={{color: percDirection === 'top' ? '#00985b' : '#ff0000'}}>
              <ArrowUpwardOutlinedIcon style={{transform: `rotate(${percDirection === 'top' ? '0deg' : '-180deg'})`, fill: percDirection === 'top' ? '#00985b' : '#ff0000'}} height={16} />
              {perc}%</p>
          </div>
      </div>

      {/** Card bottom section */}
      <div className="d-flex align-items-center justify-content-between mt-2">
        {titleDescContainer('bottom', 'left', blValue, blLabel)}
        {titleDescContainer('bottom', 'right', brValue, brLabel)}
      </div>
    </Card>
  )
}

export default Dashcard
