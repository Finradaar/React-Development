import React from 'react';
import 'antd/dist/antd.css';
import './VirtualTableForStocks.css';
// import { VariableSizeGrid as Grid } from 'react-window';


// import { AutoSizer, Column, Table } from 'react-virtualized';
import { Table } from 'antd';

import Paper from '@mui/material/Paper';
import Column from 'antd/lib/table/Column';
function VirtualTableForStock(props) {
    console.log("coloumns ==> ", props.columns)
     console.log("data ->" ,props.dataSource)
  return (
  
    
      
      <Table
        
        {...props}
        className='.virtual-table-cell'
        columns={props.columns}
        dataSource={props.dataSource}
        pagination={false}
       
         //scroll={{ x: props.scroll.x, y: 640 }}
        bordered
        
       
        
        
      >
        
        </Table>


      

      
      
      
    
  );
} 


export default VirtualTableForStock