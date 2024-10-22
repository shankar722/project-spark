import React from "react";
import Grid from '@mui/material/Grid2';
import {Button, Card, Paper, Checkbox, Chip } from '@mui/material/';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GcChart from "./components/gcChart/gcChart";
import SummaryChart from "./components/summaryChart/summaryChart";
import ProductExposures from "./components/productExposures/productExposures";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import JoinFullOutlinedIcon from '@mui/icons-material/JoinFullOutlined';
import './tcbTca.scss';

const BorderLinearProgress = styled(LinearProgress)(({ theme, colorFill = '#308fe8', colorBg = theme.palette.grey[800] }) => ({
    height: 6,
    width: '100%',
    marginLeft: '0',
    marginBottom: '0.25rem',
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

const TcbTca = () => {
    const a = [1,2,3,4,5]

    const metrics = [
        {
            avg: '1,280',
            desc: 'Total number of Material',
            perc: '',
            value: 0
        },
        {
            avg: '9,21,389',
            desc: 'Quantity',
            perc: '-4.32',
            value: 30,
            color: '#6DBA00',
            percType: 'danger'
        },
        {
            avg: '2.64',
            desc: 'Ratio',
            perc: '35.92',
            value: 30,
            color: '#009CDD',
            percType: 'success'
        },
        {
            avg: '-2,27,244',
            desc: 'Price',
            perc: '24,333.22',
            value: 30,
            color: '#FF40B3',
            percType: 'danger'
        },
        {
            avg: '-2,97,061',
            desc: 'Margin',
            perc: '-70.23',
            value: 30,
            color: '#8E75F8',
            percType: 'success'
        }
    ]

  return (
    <>
        <div className="d-flex align-items-center mb-3">
            <Button variant="contained" className="page-header-back-btn d-flex align-items-center p-0 mr-3"><KeyboardBackspaceIcon /></Button>
            <div className="d-flex flex-column">
                <p className='mx-0 mt-0 mb-0 p-0 page-header'>TCB vs TCA</p>
                <p className='mx-0 mt-0 mb-0 p-0 page-desc'>Home</p>
            </div>
        </div>
        <Grid container spacing={2} className='flex-balloon d-flex flex-row'>
            <Grid size={12}>
                <Card className="custom-card d-flex align-items-end justify-content-between custom-card-bg p-3">
                    <div className="h-100 d-flex flex-column justify-content-end product-banner">
                        <p className="page-header mt-0 mx-0 mb-1 p-0">Cashew</p>
                        <p className="cardDesc m-0 p-0">Busniess Unit</p>
                    </div>

                    <Grid container spacing={2}  className="d-flex align-items-center">
                        <Grid size={3}>
                            <Card className="custom-card h-100 p-3" style={{minWidth: 150}}>
                                <LockOutlinedIcon className="product-card-icon mb-3" />
                                <p className="cardTitle mt-0 mx-0 mb-2 p-0" style={{fontSize: '2rem', color: 'rgb(255, 175, 204)'}}>$12 M</p>
                                <p className="cardDesc m-0 p-0 d-flex align-items-center">Closed <ArrowForwardOutlinedIcon className="ml-auto" /></p>
                            </Card>
                        </Grid> 

                        <Grid size={3}>
                            <Card className="custom-card h-100 p-3" style={{minWidth: 150}}>
                                <AttachMoneyOutlinedIcon className="product-card-icon mb-3" />
                                <p className="cardTitle mt-0 mx-0 mb-2 p-0" style={{fontSize: '2rem', color: 'rgb(162, 210, 255)'}}>$3 M</p>
                                <p className="cardDesc m-0 p-0 d-flex align-items-center">Long <ArrowForwardOutlinedIcon className="ml-auto" /></p>
                            </Card>
                        </Grid> 

                        <Grid size={3}>
                            <Card className="custom-card h-100 p-3" style={{minWidth: 150}}>
                                <MoneyOffOutlinedIcon className="product-card-icon mb-3" />
                                <p className="cardTitle mt-0 mx-0 mb-2 p-0" style={{fontSize: '2rem', color: 'rgb(210, 185, 223)'}}>$7 M</p>
                                <p className="cardDesc m-0 p-0 d-flex align-items-center">Short <ArrowForwardOutlinedIcon className="ml-auto" /></p>
                            </Card>
                        </Grid> 

                        <Grid size={3}>
                            <Card className="custom-card h-100 p-3" style={{minWidth: 150}}>
                                <JoinFullOutlinedIcon className="product-card-icon mb-3" />
                                <p className="cardTitle mt-0 mx-0 mb-2 p-0" style={{fontSize: '2rem', color: 'rgb(173, 193, 120)'}}>$22 M</p>
                                <p className="cardDesc m-0 p-0 d-flex align-items-center">Full <ArrowForwardOutlinedIcon className="ml-auto" /></p>
                            </Card>
                        </Grid> 
                    </Grid>
                </Card>
            </Grid>
            <Grid size={12}>
                <Card className="custom-card p-3">
                    <Grid container spacing={0} className="d-flex align-items-center justify-content-between">
                        {metrics.map((item, index) => (
                            <Grid size={2} className="d-flex align-items-center">
                                <div className={`d-flex flex-column flex-balloon justify-content-between mr-4 ${index && ''}`}>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="price-card-price avg mt-0 mb-1 mx-0">{item.avg}</p>
                                        {item?.perc && <p className="price-card-desc perc m-0" style={{color: item?.percType === 'success' ? '#00D9D9' : '#F1416C' }}>{item.perc}%</p>}
                                    </div>
                                    <BorderLinearProgress variant="determinate" value={item.value} colorBg='rgba(181, 181, 195, 1)' colorFill={item.color} />
                                    <p className="price-card-desc m-0">{item.desc}</p>
                                </div>
                                {(index !== metrics.length - 1) && <div className="vertical-hr"></div>}
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Grid>
            <Grid size={6}>
                <GcChart />
            </Grid>
            <Grid size={6}>
                <SummaryChart />
            </Grid>
            <Grid size={12}>
                <ProductExposures />
            </Grid>
        </Grid>
    </>
  )
}

export default TcbTca;
