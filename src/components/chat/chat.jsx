import React, {useRef, useState} from "react";
import Grid from '@mui/material/Grid2';
import {TextField, InputAdornment, Box } from '@mui/material/';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material/';

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import './chat.scss';

const Chat = () => {
  const hiddenFileInput = useRef(null);
  const [question, setQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [file, setFile] = useState({})
  const [selectedAttachment, setSelectedAttachment] = useState(false)
  const [chatThread, setChatThread] = useState(new Array())
  const greetingText = ["Hello! How's it going?", 'Hey! How can I assist you today?', "Hey! What's on your mind today?", "Hi there! How are you doing today?"]
  const scrollLayoutNode = document.getElementById('layout');
  const tableHeaders = {
    sku: 'SKU',
    m2mGrouping: 'M2M Grouping',
    customerGroup: 'Customer Group',
    customerName: 'Customer Name',
    packing: 'Packing',
    ingredient1: 'Ingredient 1',
    pricePerKg: 'Price per KG',
    avgRmPerKg: 'Avg RM Price per KG',
    procurement: 'Procurement',
    avgPm: 'Avg PM',
    dcMohSelling: 'DC + MOH + Selling',
    totalCogs: 'Total CGS',
    gc: 'GC',
    gcPerc: 'GC %',
    sopQty: 'SOP Qty',
    sopPricePerKg: 'SOP Price per KG',
    pendingPurchaseContractQty: 'Pending Purchase contract Qty',
    pendingPurchaseContractPricePerKg: 'Pending Purchase contract Price per KG',
    stockRmQty: 'Stock RM Qty',
    stockRmPricePerKg: 'Stock RM Price per kg',
    weighedAvgRmPrice: 'Weighted Avg RM Price',
    category: 'Category',
    jan23: 'Jan-23',
    feb23: 'Feb-23',
    mar23: 'Mar-23',
    apr23: 'Apr-23',
    may23: 'May-23',
    jun23: 'Jun-23',
    valueOverdue: 'Value Overdue',
    avgCreditsdays: 'Avg Credits Days',
    avgCollectedDays: 'Avg Collected Days',
    wcImpact: 'WC Impact',
    gl: 'G/L',
    altAcc: 'Alt. Acct',
    busA: 'BusA',
    profitCtr: 'Profit Ctr',
    text: 'Text',
    yearMonth: 'Year/month',
    docDate: 'Doc. Date',
    currency: 'Curr.',
    amountInDocCurreny: 'Amount in doc. curr.',
    localCurrency: 'LCurr',
    amountInLocalCurreny: 'Amount in local cur.',
      salesInvoiceNo: 'Sales Invoice No',
      group: 'Group',
      customerName: 'CUSTOMER NAME',
      materialGroup: 'Material Group',
      salesValueInUsd: 'Sales Value in USD'
  }

  const generateResponse = (question) => {
    scrollLayoutNode.scrollTo(0, scrollLayoutNode.scrollHeight + 100);
    setIsTyping(true);
    scrollLayoutNode.scrollTo(0, scrollLayoutNode.scrollHeight + 100);
    let responseTime = 1000;
    let response = ''; 
    let tableData = null;
    let remarks = null;
    switch (question) {
      case 'Hi':
      case 'Hello':
      case 'Hey':
      case 'hi':
      case 'hello':
      case 'hey':
        response = greetingText[Math.floor(Math.random() * greetingText.length)];
        responseTime = 1000;
        tableData = null;
        break;
      case 'What is the margin for attached deal?':
      case 'What is the margin as per TCB?':
        response = '';
        responseTime = 2000;
        tableData = new Array([{
          sku: 548,
          m2mGrouping: 'Pine Nuts',
          customerGroup: 200,
          customerName: 'Aldi',
          packing: 'Pillowbag',
          ingredient1: 1815
        }], 
        [{
          pricePerKg: 20.40,
          avgRmPerKg: 17.99,
          procurement: 0.12,
          avgPm: 0.33,
          dcMohSelling: 0.56,
          totalCogs: 19.00,
          gc: 1.40,
          gcPerc: '6.9%'
        }])
        break;
      case 'What is the Margin as per current actual cost ?':
      case 'What is the Margin for this deal ?':
        response = '';
        responseTime = 2000;
        tableData = new Array([{
          sku: 548,
          m2mGrouping: 'Pine Nuts',
          customerGroup: 200,
          customerName: 'Aldi',
          packing: 'Pillowbag',
          ingredient1: 1815,
        }],
        [{
          sopQty: 120,
          sopPricePerKg: 20.53,
          avgRmPerKg: 21.14,
          procurement: 0.10,
          avgPm: 0.27,
          dcMohSelling: 0.69,
          totalCogs: 22.20,
          gc: '-1.67%',
          gcPerc: '-8.1%'
        }])
        break;
      case 'Need comparison between TCB vs TCA':
      case 'Need a comparison for this deal between TCB vs TCA':
      case 'tcb vs tca':
          response = 'Actual Margins are -8.1 % , -15% drop compared to TCB driven by RM 14,7% & DC/MOH/Selling 0.6% , offset by Procurement -0.1% , Packing material -0,3%';
          responseTime = 2000;
          tableData = new Array([{
            sku: 548,
            m2mGrouping: 'Pine Nuts',
            customerGroup: 200,
            customerName: 'Aldi',
            packing: 'Pillowbag',
            ingredient1: 1815,
          }], [{
            sopQty: 120,
            sopPricePerKg: 20.53,
            avgRmPerKg: 21.14,
            procurement: 0.10,
            avgPm: 0.27,
            dcMohSelling: 0.69,
            totalCogs: 22.20,
            gc: '-1.67%',
            gcPerc: '-8.1%'
          }], [{
            pricePerKg: 20.40,
            avgRmPerKg: 17.99,
            procurement: 0.12,
            avgPm: 0.33,
            dcMohSelling: 0.56,
            totalCogs: 19.00,
            gc: 1.40,
            gcPerc: '6.9%'
          }])
          break;
      case 'What is impacting RM ?':
      case 'What is impacting pine nuts M2M ?':
        response = 'Existing stocks where purchased at 23,9 per KG which is impacting the  RM cost';
        responseTime = 2000;
        tableData = new Array([{
          pendingPurchaseContractQty: '380,000',
          pendingPurchaseContractPricePerKg: 19.6,
          stockRmQty: '212,480',
          stockRmPricePerKg: 23.9,
          weighedAvgRmPrice: 21.4
        }])
        break;
      case 'Why do we have excess stock with this price ?':
      case 'Is there any counterparty risk due to any delivery default ?':
        response = `The existing shipments quantities are not inline wit contract
        Aldi Nord Contract #6661 – on 250 MT , only 85 MT qtys were shipped
        Aldi South Contract #6667 – on 200 MT only 135 MT qtys were shipped`;
        responseTime = 2000;
        tableData = null;
        break;
      case 'What is impacting  DC cost ?':
        response = '0.7% impact driven by Freight 0,4 % in Freight, & 0.3% in Power';
        responseTime = 2000;
        tableData = new Array([
          {
            category: 'Freight',
            jan23: '313,510',
            feb23: '248,560',
            mar23: '275,812',
            apr23: '240,118',
            may23: '327,285',
            jun23: '1,405,285'
          },
          {
            category: 'Power',
            jan23: '154,903',
            feb23: '66,548',
            mar23: '82,084',
            apr23: '100,009',
            may23: '107,812',
            jun23: '511,356'
          },
          {
            category: 'Freight % on Rev',
            jan23: '2.6%',
            feb23: '1.9%',
            mar23: '1.5%',
            apr23: '1.7%',
            may23: '2.0%',
            jun23: '1.9%'
          },
          {
            category: 'Power % on Rev',
            jan23: '1.3%',
            feb23: '0.5%',
            mar23: '0.4%',
            apr23: '0.7%',
            may23: '0.7%',
            jun23: '0.7%'
          },
          {
            category: 'Total',
            jan23: '3.9%',
            feb23: '2.4%',
            mar23: '1.9%',
            apr23: '2.4%',
            may23: '2.7%',
            jun23: '2.6%'
          }
        ]);
        break;

      // risk
      case 'What is the credit limit breach ?':
        response = '';
        responseTime = 2000;
        tableData = new Array([{
          valueOverdue: '1.1 M',
          avgCreditsdays: '25 Days',
          avgCollectedDays: '31 Days',
          wcImpact: '120,000 USD'
        }])
        break;

      case 'Which customers impacts credit breach ?':
      case 'Which customers impacts credit breach':
        response = `Costco over due 700K USD & avg payment days 67 days instead of 60 days  - 7 days impacts the working capital 
        Rewer over due by 300K USD & Avg payments days are 37 instead of 30 days -7 days impacts the working capital`;
        responseTime = 2000;
        tableData = null
        break;
        
      case 'Is there any FX cover without underlying asset ?':
        response = 'Following covers are without underlying assets and it impact the PNL by 1500 USD';
        responseTime = 2000;
        tableData = new Array([{
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Sell FX:EUR  FX Settle-BU-Trading',
          yearMonth: '2024/01',
          docDate: '2/1/2024',
          currency: 'EUR',
          amountInDocCurreny: '48,402.90',
          localCurrency: 'USD',
          amountInLocalCurreny: '52,473.58'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Buy FX:USD  FX Settle-BU-Trading',
          yearMonth: '2024/01',
          docDate: '2/1/2024',
          currency: 'USD',
          amountInDocCurreny: '-53,465.84',
          localCurrency: 'USD',
          amountInLocalCurreny: '-53,465.84'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Buy FX:USD  FX Settle-BU-Trading',
          yearMonth: '2024/02',
          docDate: '3/1/2024',
          currency: 'USD',
          amountInDocCurreny: '-52,534.57',
          localCurrency: 'USD',
          amountInLocalCurreny: '-52,534.57'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Sell FX:EUR  FX Settle-BU-Trading',
          yearMonth: '2024/02',
          docDate: '3/1/2024',
          currency: 'EUR',
          amountInDocCurreny: '48,402.90',
          localCurrency: 'USD',
          amountInLocalCurreny: '52,367.10'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Sell FX:EUR  FX Settle-BU-Trading',
          yearMonth: '2024/03',
          docDate: '3/29/2024',
          currency: 'EUR',
          amountInDocCurreny: '48,402.90',
          localCurrency: 'USD',
          amountInLocalCurreny: '52,362.10'
        },

        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Buy FX:USD  FX Settle-BU-Trading',
          yearMonth: '2024/03',
          docDate: '3/29/2024',
          currency: 'USD',
          amountInDocCurreny: '-52,427.56',
          localCurrency: 'USD',
          amountInLocalCurreny: '-52,427.56'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Sell FX:EUR  FX Settle-BU-Trading',
          yearMonth: '2024/04',
          docDate: '5/1/2024',
          currency: 'EUR',
          amountInDocCurreny: '48,402.90',
          localCurrency: 'USD',
          amountInLocalCurreny: '51,887.91'
        },

        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Buy FX:USD  FX Settle-BU-Trading',
          yearMonth: '2024/04',
          docDate: '5/1/2024',
          currency: 'USD',
          amountInDocCurreny: '-52,431.49',
          localCurrency: 'USD',
          amountInLocalCurreny: '-52,431.49'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Sell FX:EUR  FX Settle-BU-Trading',
          yearMonth: '2024/05',
          docDate: '6/1/2024',
          currency: 'EUR',
          amountInDocCurreny: '48,402.90',
          localCurrency: 'USD',
          amountInLocalCurreny: '52,342.90'
        },

        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Buy FX:USD  FX Settle-BU-Trading',
          yearMonth: '2024/05',
          docDate: '6/1/2024',
          currency: 'USD',
          amountInDocCurreny: '-52,951.67',
          localCurrency: 'USD',
          amountInLocalCurreny: '-52,951.67'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Sell FX:EUR  FX Settle-BU-Trading',
          yearMonth: '2024/06',
          docDate: '6/29/2024',
          currency: 'EUR',
          amountInDocCurreny: '48,402.90',
          localCurrency: 'USD',
          amountInLocalCurreny: '51,776.58'
        },

        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Buy FX:USD  FX Settle-BU-Trading',
          yearMonth: '2024/06',
          docDate: '6/29/2024',
          currency: 'USD',
          amountInDocCurreny: '-52,407.32',
          localCurrency: 'USD',
          amountInLocalCurreny: '-52,407.32'
        },
        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Sell FX:EUR  FX Settle-BU-Trading',
          yearMonth: '2024/07',
          docDate: '8/1/2024',
          currency: 'EUR',
          amountInDocCurreny: '48,402.90',
          localCurrency: 'USD',
          amountInLocalCurreny: '52,376.78'
        },

        {
          gl: 56000006,
          altAcc: 94001,
          busA: '0284',
          profitCtr: 'SG00536',
          text: '-Buy FX:USD  FX Settle-BU-Trading',
          yearMonth: '2024/07',
          docDate: '8/1/2024',
          currency: 'USD',
          amountInDocCurreny: '-51,857.05',
          localCurrency: 'USD',
          amountInLocalCurreny: '-51,857.05'
        },
      ])
        remarks = '$15,000 loss'
        break;
      
      case 'which are all the invoices impacting this breach ?':
        response = '';
        responseTime = 2000;
        tableData = new Array([{
          salesInvoiceNo: '9004301230',
          group: 'Costco',
          customerName: 'COSTCO WHOLESALE INDUSTRIES',
          materialGroup: 'Pinenuts',
          salesValueInUsd: '358,452.00'
        },
        {
          salesInvoiceNo: '9004301231',
          group: 'Costco',
          customerName: 'COSTCO WHOLESALE INDUSTRIES',
          materialGroup: 'Pinenuts',
          salesValueInUsd: '358,452.00'
        },
        {
          salesInvoiceNo: '9004301290',
          group: 'Costco',
          customerName: 'COSTCO WHOLESALE INDUSTRIES',
          materialGroup: 'Macadamia',
          salesValueInUsd: '343,818.00'
        },
        {
          salesInvoiceNo: '9004301338',
          group: 'Costco',
          customerName: 'COSTCO WHOLESALE INDUSTRIES',
          materialGroup: 'Macadamia',
          salesValueInUsd: '343,818.00'
        },
        {
          salesInvoiceNo: '9004301406',
          group: 'Costco',
          customerName: 'COSTCO WHOLESALE INDUSTRIES',
          materialGroup: 'Macadamia',
          salesValueInUsd: '343,818.00'
        }
      ])
        break;

      default:
        response = 'It seems like your message got scrambled. Could you try sending it again?';
        responseTime = 1000;
        tableData = null;
        break;
    }
    setTimeout(() => {
      const newChatThreadWithAns = new Array(...chatThread);
      const newResp = {type: 'answer', text: response}
      if (tableData && tableData.length) newResp['tableData'] = new Array(...tableData)
      if (remarks) newResp['remarks'] = remarks;
      newChatThreadWithAns.push({type: 'question', text: question, attachment: file});
      newChatThreadWithAns.push(newResp);
      setIsTyping(false);
      setChatThread(newChatThreadWithAns);
      setFile({});
      scrollLayoutNode.scrollTo(0, scrollLayoutNode.scrollHeight + 100);
    }, responseTime);
  }

  const handleSend = () => {
    if (question === '') return;
    const newChatThread = new Array(...chatThread);
    newChatThread.push({type: 'question', text: question.trim(), attachment: file});
    setChatThread(newChatThread);
    scrollLayoutNode.scrollTo(0, scrollLayoutNode.scrollHeight + 100);
    setSelectedAttachment(false)
    generateResponse(question.trim())
    setQuestion('');
  }

  const handleEnter = event => {
    if (event.key === 'Enter') {
      handleSend();
    }
  }
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
    setSelectedAttachment(true)
  };

  return (
    <>
        <Grid container className="h-100 chat-container">
            <Grid size={12} sx={{position: 'relative'}}>
                {chatThread.length ? 
                <div className="d-flex flex-column chat-" style={{maxWidth: '69.5%', width: '100%', margin: '0 auto', height: 'calc(100% - (57px + 2rem))', paddingBottom: 'calc(57px + 2rem)', overflowY: 'auto', marginLeft: '13.4%'}}>
                  {chatThread.map((chat, index) => (
                    <div className={`d-flex flex-column ${chat?.type === 'question' ? "mb-3" : "mb-5"}`}>
                      {chat?.text && <div key={index} className={`chat-${chat?.type} mb-3`}>
                        {chat?.text}
                      </div>}

                      {chat?.attachment?.name && <div key={index} className={`chat-${chat?.type} mb-3`}>
                        <FilePresentIcon sx={{height: '1.2rem !important'}} /> {chat?.attachment?.name}
                      </div>}

                      {chat?.tableData && chat?.tableData?.length && chat?.tableData?.map(table => 
                        <Table className="mb-3" border sx={{ maxWidth: '95%', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} aria-label="simple table">
                          <TableHead>
                            <TableRow sx={{ 'td, th': { border: '1px solid #555' }, backgroundColor: '#222847', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                              {Object.keys(table[0]).map((key, index) => (
                                <TableCell className="color-white" key={index} align={index ? 'right' : 'left'}>{tableHeaders[key]}</TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {table.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{ 'td, th': { border: '1px solid #555' }, borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}
                              >
                                {Object.keys(row).map((key, index) => (
                                  <TableCell className="color-white" key={index} align={index ? 'right' : 'left'}>{row[key]}</TableCell>
                                ))}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}

                      {chat?.remarks && <div key={index} style={{color: '#FF20A6', fontWeight: 700}} className={`chat-${chat?.type} mb-3`}>
                        <TrendingDownOutlinedIcon className="mr-1" sx={{height: '1.2rem !important'}} /> {chat?.remarks}
                      </div>}
                    </div>
                  ))}
                  {isTyping && <Box className="d-flex align-items-center justify-content-start mb-3" >
                    <Box className="dot"></Box>
                    <Box className="dot"></Box>
                    <Box className="dot"></Box>
                  </Box>}
                </div>
                : <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <AutoAwesomeOutlinedIcon className="chat-icon mb-2" />
                    <p className="chat-text m-0 p-0">Chat with us</p>
                </div>}
                
                <div 
                  className={`d-flex flex-column align-items-start justify-content-end`}
                  style={{
                    width: 'auto',
                    position: 'fixed',
                    bottom: '0',
                    paddingBottom: '1.5rem',
                    right: '17.5%',
                    left: '17.5%',
                    backgroundColor: '#0C0F20',
                    zIndex: 1
                  }}>
                    <TextField 
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyUp={(e) => handleEnter(e)}
                      className="chat-textbox" 
                      maxRows={4} 
                      fullWidth
                      placeholder='Ask anything'
                      multiline 
                      variant="outlined" 
                      slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                {(file?.name && selectedAttachment) ? <div className="d-flex align-items-center" style={{border: '1px solid #555 !important', borderRadius: 16, fontSize: 12, color: '#fff'}}>
                                  <AttachFileIcon sx={{height: '0.75rem !important'}} /> {file?.name} <CloseOutlinedIcon onClick={() => setFile({})} sx={{height: '0.75rem !important'}} />
                                </div> 
                                : <>
                                  <AttachFileIcon sx={{height: '1.2rem !important'}} onClick={handleClick} className="send-icon" />
                                  <input
                                    type="file"
                                    onChange={handleChange}
                                    ref={hiddenFileInput}
                                    style={{display: 'none'}} // Make the file input element invisible
                                  />
                                </>}
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <SendIcon className="send-icon" onClick={() => handleSend('question')} />
                              </InputAdornment>
                            ),
                          },
                      }}
                  />
                </div>
            </Grid>
        </Grid>
    </>
  )
}

export default Chat;
