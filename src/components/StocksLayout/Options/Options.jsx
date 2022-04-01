
import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { CURRENT_COMPONENT } from "../../../reducers/types";
import {  useListApiCall } from "../../../serviceCall/listServiceCall";

import { tableData } from "../../../tableColumns/TableData";
import { OptionsColumns, TableColumns } from "../../../tableColumns/TableDataColumns";
import ReactVirtualizedTable from "../../Table/ReactVirtualizedTable";

import { settings } from "../../../config/settings"

function Options (){

    const [tableDataValue, setTableDataValue] = useState([]);
    const data = [
        ['Frozen yoghurt', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 159, 6.0, 123],
        ['Ice cream sandwich', 237, 9.0, 37, 4.3],
        ['Eclair', 262, 16.0, 24, 6.0],
        ['Cupcake', 305, 3.7, 67, 4.3],
        ['Gingerbread', 356, 16.0, 49, 3.9],
    ]
    
    // const dataValue = useListApiCall();

    

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({
        type: CURRENT_COMPONENT,
        payload: { component: "Stocks", sideBarMenuKey: "1" }
      });

      const body =JSON.stringify({
        "filters": [
            {
                "key": "txn_date",
                "values": [
                    "2022-03-15"
                ],
                "operator": "GTE"
            }
        ]
    });

      fetch(settings.baseURL + settings.endpoints.list, {method: "POST", body: body })
      .then(response => response.json())
      .then(result=> {
          console.log(`result --> ${JSON.stringify(result.data)}`)
        setTableDataValue(result.data);
      })
      .catch(error =>{
          console.log(error);
          
      })
    }, [dispatch, 1000]);

    

    return (
        <>
            <ReactVirtualizedTable 
            // columnsValue={OptionsColumns} 
            // columnsData={tableData}
            columnsValue={TableColumns}
            columnsData={tableData}
            onRowClick={event => {
                //console.log(event)
                console.log(event.rowData.name)
            }}
            onHeaderClick={event => {
                console.log(" Header ", event)
                const dataKeyValue = event.dataKey;
                console.log(dataKeyValue)
                // setTableData(tableData.sort((a, b) => a.id - b.id
                // ));
                // console.log(` ${JSON.stringify(tableData.sort((a, b) => a.id - b.id))}`)
            }}
            
            />
        </>

    )

}

export default Options;


