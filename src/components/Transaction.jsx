import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import mockTransactions from './mockData';

export default function PinnedSubheaderList() {
  return (
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
      '& ul': { padding: 0 },
    }}
    subheader={<li />}
  >
    <li>
      <ul>
        <ListSubheader><h3>Recent Transactions</h3></ListSubheader>
        {mockTransactions.map((transaction, index) => (
          <ListItem key={transaction.txId + index}>
            <ListItemText 
              primary={`User: ${transaction.user}`} 
              secondary={`Date: ${transaction.date} | Cost: $${transaction.cost}`} 
            />
          </ListItem>
        ))}
      </ul>
    </li>
  </List>
  );
}




export function RevenueGenerated() {

    const totalCost = mockTransactions.reduce((sum, transaction) => {
        return sum + parseFloat(transaction.cost); }, 0);

    return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h3" gutterBottom>
         Revenue Generated
        </Typography>
        <Typography>
            ______________________
        </Typography>
        <Typography variant='h6'>
            ${totalCost.toFixed(2)}
        </Typography>
    </Box>
    );
}



export function TopSpender() {
    const topSpender = mockTransactions.reduce((max, transaction) => {
      return parseFloat(transaction.cost) > parseFloat(max.cost) ? transaction : max;
    });
  
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        <h3 style={{ color: "#3f51b5", fontSize: "1.5rem", marginBottom: "10px" }}>Top Spender</h3>
        <p style={{ fontSize: "1.2rem", color: "#FFFFFF" }}>
          <strong>User:</strong> {topSpender.user}
        </p>
        <p style={{ fontSize: "1rem", color: "#FFFFFF"}}>
          <strong>Date:</strong> {topSpender.date}
        </p>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#00FF00" }}>
          <strong>Cost:</strong> ${parseFloat(topSpender.cost).toFixed(2)}
        </p>
      </div>
    );
  }