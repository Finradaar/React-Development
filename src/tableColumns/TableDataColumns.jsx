import { Button } from "antd";

export const DayendDataColumns = [
  {
    title: 'Action',
    key:'onclick',
    width : 80,
    render: (text) => <button onClick={()=>{
      
        console.log("View Clicked ",text.symbol)
        
    }} >View</button>

  },
  {
    title: 'Updated at',
    dataIndex: 'update_date',
    key: 'update_date',
   // ellipsis: true,
    sorter: (a, b) => a.update_date - b.update_date,
    width: 160,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
   // ellipsis: true,
   width: 140,
    sorter: (a, b) => {
      if (a.symbol < b.symbol) {
        return -1;
      }
      if (a.symbol > b.symbol) {
        return 1;
      }
      return 0;
    },
    sortDirections: ['ascend' , 'descend'],
    //width: 100,
  },
  {
    title: 'Low',
    dataIndex: 'low',
    key: 'low',
    //ellipsis: true,
    sorter: (a, b) => a.low - b.low,
    width: 100,
  },
  {
    title: 'High',
    dataIndex: 'high',
    key: 'high',
    // ellipsis: true,
    sorter: (a, b) => a.high - b.high,
     width: 100,
  },
  {
    title: 'Open Price',
    dataIndex: 'open',
    key: 'open',
    // ellipsis: true,
    sorter: (a, b) => a.open - b.open,
     width: 120,
  },
  {
    title: 'MCAD',
    dataIndex: 'macd',
    key: 'macd',
     ellipsis: true,
    sorter: (a, b) => a.macd - b.macd,
    width: 100,
  },
  {
    title: 'Signal',
    dataIndex: 'signal',
    key: 'signal',
    ellipsis: true,
    sorter: (a, b) => a.signal - b.signal,
    width: 100,
  },
  {
    title: 'Trigger1',
    dataIndex: 'trigger1',
    key: 'trigger1',
    ellipsis: true,
    sorter: (a, b) => a.trigger1 - b.trigger1,
    width: 100,
  },
  {
    title: '48 EMA',
    dataIndex: 'ema_48_open',
    key: 'ema_48_open',
    ellipsis: true,
    sorter: (a, b) => a.ema_48_open - b.ema_48_open,
    width: 100,
  },
  {
    title: 'AVG 100',
    dataIndex: 'avg_100',
    key: 'avg_100',
    ellipsis: true,
    sorter: (a, b) => a.avg_100 - b.avg_100,
    width: 110,
  },
  {
    title: 'Trigger2',
    dataIndex: 'trigger2',
    key: 'trigger2',
    ellipsis: true,
    sorter: (a, b) => a.trigger2 - b.trigger2,
    width: 100,
  },
  {
    title: 'Strategy',
    dataIndex: 'strategy',
    key: 'strategy',
    ellipsis: true,
    sorter: (a, b) => {
      if (a.strategy < b.strategy) {
        return -1;
      }
      if (a.strategy > b.strategy) {
        return 1;
      }
      return 0;
    },
    sortDirections: ['ascend' , 'descend'],
    width: 110,
  },
  {
    title: 'Close_price',
    dataIndex: 'close_price',
    key: 'close_price',
    ellipsis: true,
    sorter: (a, b) => a.close_price - b.close_price,
    width: 120,
  },
  {
    title: 'Prev. Close',
    dataIndex: 'previous_close',
    key: 'previous_close',
    // ellipsis: {
    //   showTitle: false,
    // },
    ellipsis: true,
    sorter: (a, b) => a.previous_close - b.previous_close,
    width: 120,
  },
  {
    title: 'Change',
    dataIndex: 'change',
    key: 'change',
    // ellipsis: {
    //   showTitle: false,
    // },
    ellipsis: true,
    sorter: (a, b) => a.change - b.change,
    width: 100,
  },
  {
    title: 'AVG 50',
    dataIndex: 'avg_50',
    key: 'avg_50',
    ellipsis: true,
    sorter: (a, b) => a.avg_50 - b.avg_50,
    width: 100,
  },
  {
    title: 'AVG 200',
    dataIndex: 'avg_200',
    key: 'avg_200',
    ellipsis: true,
    sorter: (a, b) => a.avg_200 - b.avg_200,
    width: 110,
  }
];

export const OptionsDataColumns = [
  {
      title: 'Updated at',
      dataIndex: 'update_date',
      key: 'update_date',
      ellipsis: true,
      sorter: (a, b) => a.update_date - b.update_date,
      width: 160,
  },
  {
      title: 'Expiry Date',
      dataIndex: 'expiry_date',
      key: 'expiry_date',
      sorter: (a, b) => {
          if (a.expiry_date < b.expiry_date) {
              return -1;
          }
          if (a.expiry_date > b.expiry_date) {
              return 1;
          }
          return 0;
      },
      ellipsis:true,
      sortDirections: ['ascend', 'descend'],
      width: 160,
  },
  {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      sorter: (a, b) => {
          if (a.symbol < b.symbol) {
              return -1;
          }
          if (a.symbol > b.symbol) {
              return 1;
          }
          return 0;
      },
      ellipsis: true,
      sortDirections: ['ascend', 'descend'],
      width: 100,
  },
  {
      title: 'Open Interest',
      dataIndex: 'open_interest',
      key: 'open_interest',
      sorter: (a, b) => a.open_interest - b.open_interest,
      width: 150,
      ellipsis: true,
  },
  {
      title: 'Strike Price',
      dataIndex: 'strike_price',
      key: 'strike_price',
      ellipsis: true,
      sorter: (a, b) => a.strike_price - b.strike_price,
      width: 120,
  },
  {
      title: 'CMP',
      dataIndex: 'equity_price',
      key: 'equity_price',
      ellipsis: true,
      sorter: (a, b) => a.equity_price - b.equity_price,
      width: 120,
  },
  {
      title: 'Premium',
      dataIndex: 'current_price',
      key: 'current_price',
      ellipsis: true,
      sorter: (a, b) => a.current_price - b.current_price,
      width: 120,
  },
  {
      title: 'Ask Price',
      dataIndex: 'ask_price',
      key: 'ask_price',
      ellipsis: true,
      sorter: (a, b) => a.ask_price - b.ask_price,
      width: 120,
  },
  {
      title: 'Bid Price',
      dataIndex: 'bid_price',
      key: 'bid_price',
      ellipsis: true,
      sorter: (a, b) => a.bid_price - b.bid_price,
      width: 120,
  },
  {
      title: 'Difference',
      dataIndex: 'diff',
      key: 'diff',
      ellipsis: true,
      sorter: (a, b) => a.diff - b.diff,
      width: 130,
  },
  {
      title: 'For',
      dataIndex: 'info_type',
      key: 'info_type',
      ellipsis: true,
      sorter: (a, b) => a.info_type - b.info_type,
      width: 110,
  }
];


export const StockListColumns = [

  //{
    //     width: 200,
    //     label: 'Dessert',
    //     dataKey: 'dessert',
    //   }
  {
    label: 'Updated at',
    datakey: 'update_date',
    //key: 'update_date',
    // ellipsis: true,
    //sorter: (a, b) => a.update_date - b.update_date,
     width: 200,
  },
  {
    label: 'Symbol',
    datakey: 'symbol',
    // key: 'symbol',
    // ellipsis: true,
    // sorter: (a, b) => {
    //   if (a.symbol < b.symbol) {
    //     return -1;
    //   }
    //   if (a.symbol > b.symbol) {
    //     return 1;
    //   }
    //   return 0;
    // },
    // sortDirections: ['ascend' , 'descend'],
     width: 160,
  },
  {
    label: 'Low',
    datakey: 'low',
    // key: 'low',
    // ellipsis: true,
    // sorter: (a, b) => a.low - b.low,
     width: 80,
  },
  {
    label: 'High',
    datakey: 'high',
    // key: 'high',
    // ellipsis: true,
    // sorter: (a, b) => a.high - b.high,
    width: 80,
  },
  {
    label: 'Open Price',
    datakey: 'open',
    // key: 'open',
    // ellipsis: true,
    // sorter: (a, b) => a.open - b.open,
    width: 120,
  },
  {
    label: 'Last Trade Price',
    datakey: 'current_price',
    // key: 'current_price',
    // ellipsis: true,
    // sorter: (a, b) => a.open - b.open,
    width: 150,
  },
  {
    label: 'Signal',
    datakey: 'signal',
    // key: 'signal',
    // ellipsis: true,
    // sorter: (a, b) => a.signal - b.signal,
    width: 110,
  },
  {
    label: '48 EMA',
    datakey: 'ema_48_open',
    key: 'ema_48_open',
    ellipsis: true,
    sorter: (a, b) => a.ema_48_open - b.ema_48_open,
    width: 120,
  },
  {
    label: 'AVG 100',
    datakey: 'avg_100',
    key: 'avg_100',
    ellipsis: true,
    sorter: (a, b) => a.avg_100 - b.avg_100,
    width: 110,
  },
  {
    label: 'Strategy',
    datakey: 'strategy',
    key: 'strategy',
    ellipsis: true,
    sorter: (a, b) => {
      if (a.strategy < b.strategy) {
        return -1;
      }
      if (a.strategy > b.strategy) {
        return 1;
      }
      return 0;
    },
    sortDirections: ['ascend' , 'descend'],
    width: 110,
  },
  {
    label: 'Close_price',
    datakey: 'close_price',
    key: 'close_price',
    ellipsis: true,
    sorter: (a, b) => a.close_price - b.close_price,
    width: 120,
  },
  {
    label: 'Prev. Close',
    datakey: 'previous_close',
    key: 'previous_close',
    // ellipsis: {
    //   showTitle: false,
    // },
    ellipsis: true,
    sorter: (a, b) => a.previous_close - b.previous_close,
    width: 120,
  },
  {
    label: 'Change',
    datakey: 'change',
    key: 'change',
    ellipsis: true,
    sorter: (a, b) => a.change - b.change,
    width: 100,
  },
  {
    label: 'AVG 50',
    datakey: 'avg_50',
    key: 'avg_50',
    ellipsis: true,
    sorter: (a, b) => a.avg_50 - b.avg_50,
    width: 100,
  },
  {
    label: 'Trigger',
    datakey: 'action',
    key: 'action',
    ellipsis: true,
    sorter: (a, b) => a.macd - b.macd,
    width: 100,
  },
];




export const TableColumns = [
  {
    width: 250,
    label: 'Status',
    dataKey: 'status',
  },
  {
    width: 200,
    label: 'Action',
    dataKey: 'action',
    // numeric: true,
  },
  {
    width: 200,
    label: 'Strategy',
    dataKey: 'strategy',
    // numeric: true,
  },
  {
    width: 200,
    label: 'Exchange',
    dataKey: 'exchange',
    // numeric: true,
  },
  {
    width: 230,
    label: 'Symbol',
    dataKey: 'symbol',
    // numeric: true,
  },
  {
    width: 350,
    label: 'Name',
    dataKey: 'name',
    // numeric: true,
  },
  {
    width: 200,
    label: 'Type',
    dataKey: 'type',
    // numeric: true,
  },
  {
    width: 200,
    label: 'Entry',
    dataKey: 'entry',
    numeric: true,
  },
  {
    width: 250,
    label: 'Enter At',
    dataKey: 'enter_at',
    numeric: true,
  },
  {
    width: 200,
    label: 'Exit',
    dataKey: 'exit',
    // numeric: true,
  },
  {
    width: 250,
    label: 'Exit At',
    dataKey: 'exit_at',
    numeric: true,
  },
  {
    width: 200,
    label: 'Profit',
    dataKey: 'profit',
    numeric: true,
  },
];

export const OrdersColumns = [
 
  {
    width: 250,
    label: 'Status',
    dataKey: 'status',
    //sorter: (a, b) => a.status - b.status,
  },
  {
    width: 200,
    label: 'Action',
    dataKey: 'txn_type',
     numeric: false,
  },
  {
    width: 200,
    label: 'Strategy',
    dataKey: 'strategy',
    // numeric: true,
  },
  {
    width: 200,
    label: 'Exchange',
    dataKey: 'exchange',
    // numeric: true,
  },
  {
    width: 230,
    label: 'Symbol',
    dataKey: 'symbol',
    // numeric: true,
  },
  {
    width: 350,
    label: 'Name',
    dataKey: 'name',
    // numeric: true,
  },
  {
    width: 200,
    label: 'Type',
    dataKey: 'stock_type',
    // numeric: true,
  },
  {
    width: 200,
    label: 'Entry',
    dataKey: 'entry_price',
    numeric: true,
  },
  {
    width: 250,
    label: 'Enter At',
    dataKey: 'enter_at',
    numeric: true,
  },
  {
    width: 230,
    label: 'Exit',
    dataKey: 'exit_price',
    // numeric: true,
  },
  {
    width: 250,
    label: 'Exit At',
    dataKey: 'exit_at',
    numeric: true,
  },
  {
    width: 200,
    label: 'Profit',
    dataKey: 'profit',
    numeric: true,
  },
];

export const OptionsColumns = [
  {
    label: "Actions",
    dataKey: "actions",
    width: 250
  },
  {
    label: "Date",
    dataKey: "created_at",
    width: 250
  }
];