
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../../../reducers/types";

import { tableData } from "../../../tableColumns/TableData";
import { TableColumns } from "../../../tableColumns/TableDataColumns";
import ReactVirtualizedTable from "../../Table/ReactVirtualizedTable";



function Dayend (){
    const data = [
        ['Frozen yoghurt', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0, 159, 6.0, 123],
        ['Ice cream sandwich', 237, 9.0, 37, 4.3],
        ['Eclair', 262, 16.0, 24, 6.0],
        ['Cupcake', 305, 3.7, 67, 4.3],
        ['Gingerbread', 356, 16.0, 49, 3.9],
    ]
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({
        type: CURRENT_COMPONENT,
        payload: { component: "Stocks", sideBarMenuKey: "1" }
      });
    }, [dispatch]);

    

    return (
        <>
            <ReactVirtualizedTable columnsValue={TableColumns} columnsData={tableData}/>
        </>

    )

}

export default Dayend;


