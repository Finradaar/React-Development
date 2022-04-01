import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT, DAYEND_DATA } from "../../reducers/types";
import Multiselect from 'multiselect-react-dropdown';
import { Divider, Modal } from "antd";
import { useSelector } from "react-redux";

//import {DayendDataColumns } from '../tableColumns/TableDataColumns';

import VirtualTableForStock from "./VirtualTableForStocks";
import { settings } from "../../config/settings"
import { tab } from "@testing-library/user-event/dist/tab";

export default function DayendData() {

  const [getStocksList, setStocksList] = useState();
  const [selectedValues, setSelectedValues] = useState([]);
  const [modalRecords, setModalRecords] = useState({});
  
  const [data, setData] = useState({ initial_data: [{}] });
  const [dayendColumn, setDayendColumn] = useState();


  const sideBarMenuKey = useSelector(
    (state) => state.currentcomponentReducer.sideBarMenuItemKey
  );

  const dayend_data = useSelector(
    (state) => state.dayendDataStocksSelectedReducer.dayendDataStocksSelected
  );

  const dispatch = useDispatch();
  /**
   * @returns Start_of_API_CAll
   */

  const ListCall = (e) => {

    var raw = JSON.stringify({
      "data_type": "dayend",
      "filters": [
        {
          "key": "symbol",
          "operator": "IN",
          "value": e
        }
      ],
      "sort": [
        {
          "update_date": "desc"
        },
        {
          "symbol": "asc"
        }
      ],
      "group_by": "symbol"
    });

    var requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://analytics.finradar.in/services/api/stock/latest", {"data_type":"dayend"})
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        setData({ initial_data: result.data })
      })
      .catch(error => console.log('error', error));

  }

  /**
  * 
  * Adding Table Columns
  * 
  */

  const getColumns = () => {
    return Object.keys(data.initial_data[0]).map((key) => {
      //console.log("Columns  ", key)
      return {
        Header: key,
        accessor: key
      };
    });
  }

  //Add values in drop-down
  const addStocksToSelectList = (e) => {
    //console.log("Added : ", e);
    setSelectedValues(e);
    dispatch({
      type: DAYEND_DATA,
      payload: { name: "Prakash", dayendStocksSelected: e }
    });
    //calling list function
    ListCall(e)
  }
  //Remove values from drop-down
  const removeStocksFromSelectList = (e) => {
    setSelectedValues(e);
    dispatch({
      type: DAYEND_DATA,
      payload: { name: "Prakash", dayendStocksSelected: e }
    });
    //calling function
    ListCall(e);
  }

  //data columns list and action 

  const DayendDataColumns = [
    {
      title: 'Action',
      key: 'onclick',
      width: 80,
      render: (text) => <button onClick={() => {

        console.log("View Clicked ", text.symbol)
          showModal(text);
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



  useEffect(() => {
    setSelectedValues(dayend_data)

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(settings.baseurl + settings.serviceEndpoints.Equity, requestOptions)
      .then(response => response.json())
      .then(result => {
        setStocksList(result.data)
      })
      .catch(error => console.log('error', error));

    console.log("Selected stocks-->  ", dayend_data)
    ListCall(dayend_data);

    setDayendColumn(
      DayendDataColumns
    )
    /*
     *
     Started Calling dispatch()
     * 
     */

    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "DayendData", sideBarMenuKey: "1" }
    });


    // console.log(" in dispatch function select values ", selectedValues)
    // dispatch({
    //   type: DAYEND_DATA,
    //   payload: { name: "Prakash", stocksSelected: [selectedValues] }
    // });
  }, [dispatch]);

  //const columns = getColumns();


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (tableValues) => {
    setIsModalVisible(true);
    console.log("show Modal: ", tableValues)
    setModalRecords(`Name:  ${tableValues.symbol}`)

  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <Fragment>

      <div className="col-6 col-offset-6">

        <div className="col-6 col-offset-6">

{/* 
          <Multiselect
            options={getStocksList}
            closeIcon="close"
            isObject={false}
            selectedValues={selectedValues}
            onSelect={addStocksToSelectList} // Function will trigger on select event
            onRemove={removeStocksFromSelectList} // Function will trigger on remove event
            placeholder="Select Stocks List"
            avoidHighlightFirstOption
            
          />

          <Divider plain></Divider> */}



          <VirtualTableForStock
            columns={dayendColumn} 
            dataSource={data.initial_data}
            className="-striped -highlight"
            scroll={{
              x: 1500,
              y: 560
            }}



          />

          <Modal title={modalRecords} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              {modalRecords}
          </Modal>
        </div>
      </div>

    </Fragment>
  );
}
