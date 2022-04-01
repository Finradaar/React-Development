import { Box, Button, Stack } from "@mui/material";
import { Col, Layout, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import Item from "antd/lib/list/Item";
import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CURRENT_COMPONENT } from "../reducers/types";
import DayendData from "./DayendData";
import OpenTrade from "./OpenTrade";
import Options from "./Options";
import OrderLayout from "./OrdersLayout";
import VirtualTableForStock from "./VirtualTableForStocks";

export default function StocksLayout() {

    // const [name, setName] = useState("DayendData");
    const [data, setData] = useState({ initial_data: [{}] });
    const [columns, setColumns] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: CURRENT_COMPONENT,
            payload: { component: "StocksLayout", sideBarMenuKey: "1" }
        });
    }, [dispatch]);


    const equityColumns = [
        {
            title: 'Action',
            key: 'onclick',
            width: 80,
            render: (text) => <button onClick={() => {

                console.log("View Clicked ", text.symbol)
                //  showModal(text);
            }} >View</button>

        },
        {
            title: 'Date',
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
            sortDirections: ['ascend', 'descend'],
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
            sortDirections: ['ascend', 'descend'],
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

    const optionsColumns = [
        {
            title: 'Action',
            key: 'onclick',
            width: 80,
            render: (text) => <button onClick={() => {

                console.log("View Clicked ", text.symbol)
                //  showModal(text);
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
            sortDirections: ['ascend', 'descend'],
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
            sortDirections: ['ascend', 'descend'],
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

    const dayendColumns = [
        {
            title: 'Action',
            key: 'onclick',
            width: 80,
            render: (text) => <button onClick={() => {

                console.log("View Clicked ", text.symbol)
                // showModal(text);
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
            sortDirections: ['ascend', 'descend'],
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
            sortDirections: ['ascend', 'descend'],
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

    useEffect(()=>{
       // setColumns(equityColumns)
    },[]);

    return (

        <Col span={24} >
            {/* <Box sx={{ '& button': { m: 1 } }}>
            <div>
            <Stack direction="row" spacing={2}>
             <Button size="small" onClick={() => {
                    console.log("clicked 1")
                    setColumns(equityColumns)
                }}>
                    Equity
                    </Button>  
                    <Button size="small"onClick={() => {
                    console.log("clicked 2")
                    setColumns(optionsColumns)
                }}>
                    Options
                    </Button>  
                    <Button size="small" onClick={() => {
                    console.log("clicked 3")
                    setColumns(dayendColumns)
                }}>
                    Dayend
                    </Button>
                    </Stack>
            </div>
            </Box> */}
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}
            style={{background: "#303030", color:"white",}}>
                <Menu.Item key="1" onClick={() => {
                    console.log("clicked 2")
                    setColumns(equityColumns)
                }}>

                Equity

                </Menu.Item>
                <Menu.Item key="2" onClick={() => {
                    console.log("clicked 2")
                    setColumns(optionsColumns)
                }}>
                    Options

                </Menu.Item>
                <Menu.Item key="3" onClick={() => {
                    console.log("clicked 3")
                    setColumns(dayendColumns)
                }}>
                    Dayend

                </Menu.Item>

            </Menu>
            <Content>
                <Box>
                    <Item>

                        <VirtualTableForStock
                            columns={columns}
                            dataSource={data.initial_data}
                            className="-striped -highlight"

                            scroll={{
                                x: 1500,
                                y: 500
                            }}

                        />
                    </Item>
                </Box>
            </Content>
        </Col>

    );
}
