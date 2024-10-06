import React, { useState } from 'react'
import {Outlet} from 'react-router-dom';
import LogoUrl from '../assets/Logo.png'

// sidebar imports
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const Home = () => {
  const [count, setCount] = useState(0)

  const iconList = [
    <HomeOutlinedIcon className='sidebar-icon'/>,
    <div style={{border: '0.15rem solid #fff', borderRadius: 25, height: 20, width: 20}} className='d-flex align-items-center justify-content-center'>
        <PercentOutlinedIcon className='sidebar-icon'/>
    </div>,
    <WarehouseOutlinedIcon className='sidebar-icon'/>,
    <StoreOutlinedIcon className='sidebar-icon'/>,
    <AssessmentOutlinedIcon className='sidebar-icon'/>,
    <TuneOutlinedIcon className='sidebar-icon'/>
  ]

  return (
    <>
        <div className='navbar d-flex align-items-center justify-content-between p-3'>
            <div className='d-flex align-items-center'>
                <img src={LogoUrl} alt="Vite Logo" width={128} />
            </div>
        </div>
        <div className='d-flex w-100'>
            <div className="sidebar d-flex flex-column align-items-center justify-content-start">
                {iconList && iconList.map((icon, index) => 
                <div className={`sidebar-icon-wrap ${count === index ? 'active': ''}`} onClick={() => setCount(index)}>
                    {icon}
                </div>)}
            </div>
            <div className='d-flex flex-balloon main-layout p-4'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Home
