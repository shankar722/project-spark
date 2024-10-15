import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Button, Card, Paper, Checkbox, Chip } from '@mui/material/';
import Grid from '@mui/material/Grid2';

import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material/';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';

import './tcbProductDetails.scss';

const TcbProductDetails = () => {
  const a = [1,2,3,4,5]

  const chipData = {
    1: {label: 'Delivered', color: 'success', icon: <CheckCircleOutlineIcon />},
    2: {label: 'In Transit', color: 'warning', icon: <LocalShippingOutlinedIcon />},
    3: {label: 'Shipped', color: 'primary', icon: <DepartureBoardOutlinedIcon />}
  }

  const createData = (orderId, orderDate, billingName, totalOrderValue, deliveryStatus) => {
    return { orderId, orderDate, billingName, totalOrderValue, deliveryStatus };
  }

  const rows = [
    createData('SKU00', '30-05-2024', 'Oberbrunner', '$1,00,000', 1),
    createData('SKU00', '30-05-2024', 'Oberbrunner', '$1,00,000', 1),
    createData('SKU00', '30-05-2024', 'Oberbrunner', '$1,00,000', 2),
    createData('SKU00', '30-05-2024', 'Oberbrunner', '$1,00,000', 3),
    createData('SKU00', '30-05-2024', 'Oberbrunner', '$1,00,000', 1),
  ];

  const renderChip = (deliveryStatus) => 
  <Chip 
    icon={chipData[deliveryStatus]?.icon} 
    label={chipData[deliveryStatus]?.label}  
    color={chipData[deliveryStatus]?.color}
    className="chip-status"
  />

  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <Button variant="contained" className="page-header-back-btn d-flex align-items-center p-0 mr-3"><KeyboardBackspaceIcon /></Button>
        <div className="d-flex flex-column">
          <p className='mx-0 mt-0 mb-0 p-0 page-header'>TCB Product Details</p>
          <p className='mx-0 mt-0 mb-0 p-0 page-desc'>Home</p>
        </div>
      </div>
      <Grid className="mb-4" container>
        <Grid size={12}>
          <Card className="custom-card d-flex align-items-center justify-content-between p-3">
            {a.map((item, index) => (
              <>
                <div className="d-flex flex-column">
                  <p className="price-card-price m-0">$56.098 M</p>
                  <p className="price-card-desc m-0"><span>12%</span> more than last month</p>
                </div>
                {(index !== a.length - 1) && <div className="vertical-hr"></div>}
              </>
            ))}
          </Card>
        </Grid>
      </Grid>

      <p className="total-records-text">Total Records: 1280</p>
      <Table sx={{ minWidth: 650, backgroundColor: '#222847', borderRadius: 2, color: '#fff' }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ 'td, th': { border: 0 } }}>
              <TableCell className="color-white" padding="checkbox"><Checkbox /></TableCell>
              <TableCell className="color-white">
                <TableSortLabel
                  direction='asc'
                  active={true}
                  className="color-white"
                  color="#fff"
                  sx={{fill: '#fff'}}
                >
                  Order
                </TableSortLabel>
              </TableCell>
              <TableCell className="color-white" align="right">Order Date</TableCell>
              <TableCell className="color-white" align="right">Bill to Name</TableCell>
              <TableCell className="color-white" align="right">Bill to Name</TableCell>
              <TableCell className="color-white" align="right">Bill to Name</TableCell>
              <TableCell className="color-white" align="right">Total Order Value</TableCell>
              <TableCell className="color-white" align="right">Delivery Status</TableCell>
              <TableCell className="color-white" align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ 'td, th': { border: 0 } }}
              >
                <TableCell className="color-white" padding="checkbox"><Checkbox /></TableCell>
                <TableCell className="color-white" component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell className="color-white" align="right">{row.orderDate}</TableCell>
                <TableCell className="color-white" align="right">{row.billingName}</TableCell>
                <TableCell className="color-white" align="right">{row.billingName}</TableCell>
                <TableCell className="color-white" align="right">{row.billingName}</TableCell>
                <TableCell className="color-white" align="right">{row.totalOrderValue}</TableCell>
                <TableCell className="color-white" align="right">{renderChip(row.deliveryStatus)}</TableCell>
                <TableCell className="color-white" align="right">
                  <div className="d-flex align-items-center justify-content-end">
                    <EditOutlinedIcon className="mr-3" />
                    <MoreHorizOutlinedIcon />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </>
  )
}

export default TcbProductDetails;
