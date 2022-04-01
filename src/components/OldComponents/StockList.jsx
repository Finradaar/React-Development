import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { CURRENT_COMPONENT, STOCK_LIST } from "../reducers/types";
import Multiselect from 'multiselect-react-dropdown';
import { Button, Divider, Table } from "antd";
import { useSelector } from "react-redux";

import { StockListColumns } from '../tableColumns/TableDataColumns';

import VirtualTableForStock from "./VirtualTableForStocks";

// import { ListCall } from "../serviceCall/listServiceCall";
import { settings } from "../config/settings"

export default function OpenTrade() {


  const [getStocksList, setStocksList] = useState();
  const [selectedValues, setSelectedValues] = useState([]);
  const [data, setData] = useState({ initial_data: [{}] });



  const sideBarMenuKey = useSelector(
    (state) => state.currentcomponentReducer.sideBarMenuItemKey
  );

  const stocks_data = useSelector(
    (state) => state.stockListStocksSelectedReducer.stocksListStocksSelected
  );

  const dispatch = useDispatch();


  useEffect(() => {

    setSelectedValues(stocks_data)

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

    console.log("Selected stocks-->  ", stocks_data)
    ListCall(stocks_data);

    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "StockList", sideBarMenuKey: "3" }
    });

  }, [dispatch]);

  // onClick functions
  const addStocksToSelectList = (e) => {
    //console.log("Added : ", e);
    setSelectedValues(e);
    dispatch({
      type: STOCK_LIST,
      payload: { name: "Prakash", stocksListSelected: e }
    });


    //calling list function


    ListCall(e)


  }

  const removeStocksFromSelectList = (e) => {
    //console.log("removed : ", e);
    setSelectedValues(e);
    dispatch({
      type: STOCK_LIST,
      payload: { name: "Prakash", stocksListSelected: e }
    });

    ListCall(e);
  }

  const ListCall = (e) => {

    var raw = JSON.stringify({
      "data_type": "dayend",
      "filters": [
          {
              "key": "strategy",
              "value": e,
              "operator": "NOT_NULL"
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

    fetch(settings.baseurl + settings.serviceEndpoints.List, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.data)
        setData({ initial_data: result.data })
      })
      .catch(error => console.log('error', error));

  }

  return (
    
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
            columns={StockListColumns}
            dataSource={data.initial_data}
            className="-striped -highlight"
            scroll={{
              x: 1500,
              y: 590
            }}

          />

        </div>
      </div>

    
  );
}
