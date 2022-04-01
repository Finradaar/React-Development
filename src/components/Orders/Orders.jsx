
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../../reducers/types";
import { tableData } from "../../tableColumns/TableData";
import { OrdersColumns } from "../../tableColumns/TableDataColumns";
import ReactVirtualizedTable from "../Table/ReactVirtualizedTable"
import { settings } from '../../config/settings'
import { useListApiCall } from "../../serviceCall/listServiceCall";

import moment from 'moment'

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Orders() {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [orderList, setOrderList] = useState([]);
    const [testValue, setTestValue] = useState({
        "name": "prakash",
        "count": 0
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dateToFormat = moment().format('YYYY-MM-DD');
   
    var bodyParams = JSON.stringify({
        "filters": [
            {
                "key": "txn_date",
                "values": [
                    dateToFormat                
                ],
                "operator": "GTE"
            }
        ]
    })
    //console.log(`body params --> ${bodyParams}`)

    const fetchTableData = () => {
        fetch('http://analytics.finradar.in/services/api/orders/list', {
            method: "POST",
            body: bodyParams,
            mode: "no-cors",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'X-Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiUHJha2FzaCBUaXdhcmkiLCJ1c2VyX3R5cGUiOiJJTlRFUk5BTCIsImlkIjozLCJpc19hdXRoZW50aWNhdGVkIjp0cnVlLCJpc19hbm9ueW1vdXMiOmZhbHNlLCJleHAiOjE2NDg2MzQ0MDkuMCwiaWF0IjoxNjQ4NjI3MjA5LjB9.U-fjHrhI6Y17An5ZduHYjd1GLfimHmgDJsKqqmDyIL0'
            }
        })
            .then(response => response.json())
            .then(result => {
                //console.log(`result --> ${JSON.stringify(result.data)}`)
                setOrderList(result.data);
                setTestValue({
                    ...testValue,
                    count: testValue.count++
                })
                console.log("data updated...")
            })
            .catch(error => {
                console.log(error)
            })
    }



    const dispatch = useDispatch();

    useEffect(() => {
     
        dispatch({
            type: CURRENT_COMPONENT,
            payload: { component: "Orders", sideBarMenuKey: "2" }
        });

        var handle = setInterval(fetchTableData, 5000);

        return () => {
            clearInterval(handle);
        }
    }, [dispatch]);

    // const dataV = async () =>  { await useListApiCall(); }
    // console.log(`dataV ${dataV}`)



    return (
        <>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

            {/* {testValue.count} */}
            <ReactVirtualizedTable 
                columnsValue={OrdersColumns} 
                columnsData={orderList} 
                onRowClick={(event) => {
                    setOpen(true);
                    console.log("onRowClick--", event)
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

export default Orders;


