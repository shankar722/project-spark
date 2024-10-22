import React, {useRef, useState} from "react";
import Grid from '@mui/material/Grid2';
import {TextField, InputAdornment, Box } from '@mui/material/';
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material/';

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './chat.scss';

const Chat = () => {
  const hiddenFileInput = useRef(null);
  const [question, setQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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
    gcPerc: 'GC %'
  }

  const generateResponse = (question) => {
    setIsTyping(true);
    scrollLayoutNode.scrollTo(0, scrollLayoutNode.scrollHeight);
    let responseTime = 1000;
    let response = ''; 
    let tableData = null;
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
        tableData = new Array({
          sku: 548,
          m2mGrouping: 'Pine Nuts',
          customerGroup: 200,
          customerName: 'Aldi',
          packing: 'Pillowbag',
          ingredient1: 1815,
          pricePerKg: 20.40,
          avgRmPerKg: 17.99,
          procurement: 0.12,
          avgPm: 0.33,
          dcMohSelling: 0.56,
          totalCogs: 19.00,
          gc: 1.40,
          gcPerc: 6.9
        })
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
      newChatThreadWithAns.push({type: 'question', text: question});
      newChatThreadWithAns.push(newResp);
      setIsTyping(false);
      setChatThread(newChatThreadWithAns);
      scrollLayoutNode.scrollTo(0, scrollLayoutNode.scrollHeight);
    }, responseTime);
  }

  const handleSend = () => {
    if (question === '') return;
    const newChatThread = new Array(...chatThread);
    newChatThread.push({type: 'question', text: question});
    scrollLayoutNode.scrollTo(0, scrollLayoutNode.scrollHeight);
    setChatThread(newChatThread);
    generateResponse(question)
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
    handleFile(fileUploaded);
  };

  return (
    <>
        <Grid container className="h-100 chat-container">
            <Grid size={12} sx={{position: 'relative'}}>
                {chatThread.length ? 
                <div className="d-flex flex-column chat-" style={{maxWidth: '69.5%', width: '100%', margin: '0 auto', height: 'calc(100% - (57px + 2rem))', paddingBottom: 'calc(57px + 2rem)', overflowY: 'auto', marginLeft: '13.4%'}}>
                  {chatThread.map((chat, index) => (
                    <div className={`d-flex flex-column ${chat.type === 'question' ? "mb-3" : "mb-5"}`}>
                      {chat.text && <div key={index} className={`chat-${chat.type} mb-3`}>
                        {chat.text}
                      </div>}

                      {chat?.tableData && chat?.tableData?.length && 
                        <Table border sx={{ maxWidth: '95%', border: '1px solid #333', borderRadius: '4px', color: '#fff' }} aria-label="simple table">
                          <TableHead>
                            <TableRow sx={{ 'td, th': { border: '1px solid #555' }, backgroundColor: '#222847', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                              {Object.keys(chat?.tableData[0]).map((key, index) => (
                                <TableCell className="color-white" key={index} align={index ? 'right' : 'left'}>{tableHeaders[key]}</TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {chat?.tableData?.map((row) => (
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
                      }
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
                      onChange={(e) => setQuestion(e.target.value.trim())}
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
                                <AttachFileIcon sx={{height: '1.2rem !important'}} onClick={handleClick} className="send-icon" />
                                <input
                                  type="file"
                                  onChange={handleChange}
                                  ref={hiddenFileInput}
                                  style={{display: 'none'}} // Make the file input element invisible
                                />
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
