import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CURRENT_COMPONENT, OPTIONS_DATA } from "../reducers/types";
import Multiselect from 'multiselect-react-dropdown';
import { Divider, Modal } from "antd";
import { useSelector } from "react-redux";

import { OptionsDataColumns } from '../tableColumns/TableDataColumns';

import VirtualTableForStock from "./VirtualTableForStocks";

import { settings } from "../config/settings"

export default function Options() {


  const [getStocksList, setStocksList] = useState();
  const [selectedValues, setSelectedValues] = useState([]);
  const [data, setData] = useState({ initial_data: [{}] });

  const [modalRecords, setModalRecords] = useState({});


  const sideBarMenuKey = useSelector(
    (state) => state.currentcomponentReducer.sideBarMenuItemKey
  );

  const options_data = useSelector(
    (state) => state.optionsDataStocksSelectedReducer.optionsDataStocksSelected
  );

  const dispatch = useDispatch();




  const OptionsDataColumns = [
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
      ellipsis: true,
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

  useEffect(() => {

    setSelectedValues(options_data)

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

    console.log("Selected stocks-->  ", options_data)
    ListCall(options_data);

    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "Options", sideBarMenuKey: "2" }
    });

  }, [dispatch]);

  // onClick functions
  const addStocksToSelectList = (e) => {
    // console.log("Added : ", e);
    setSelectedValues(e);
    dispatch({
      type: OPTIONS_DATA,
      payload: { name: "Prakash", optionStocksSelected: e }
    });


    //calling list function


    ListCall(e)


  }

  const removeStocksFromSelectList = (e) => {
    //console.log("removed : ", e);
    setSelectedValues(e);
    dispatch({
      type: OPTIONS_DATA,
      payload: { name: "Prakash", optionStocksSelected: e }
    });

    ListCall(e);
  }

  const ListCall = (e) => {

    var raw = JSON.stringify({
      "data_type": "option",
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
      "group_by": "id"
    });

    var requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(settings.baseurl + settings.serviceEndpoints.List, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        setData({ initial_data: result.data })
      })
      .catch(error => console.log('error', error));

  }

  return (
    <Fragment>
      <div className="col-6 col-offset-6">

        <div className="col-6 col-offset-6">


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

          <Divider plain></Divider>



          <VirtualTableForStock
            columns={OptionsDataColumns}
            dataSource={data.initial_data}
            className="-striped -highlight"
            scroll={{
              x: 1500,
              y: 590
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
