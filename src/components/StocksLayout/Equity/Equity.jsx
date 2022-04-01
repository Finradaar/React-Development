
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../../../reducers/types";

import { tableData } from "../../../tableColumns/TableData";
import { TableColumns } from "../../../tableColumns/TableDataColumns";
import ReactVirtualizedTable from "../../Table/ReactVirtualizedTable";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  theme: "light",
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  bgcolor: "#212121",
};

function Equity() {


  const [open, setOpen] = useState(false);
  const [modalValues, setModalValues] = useState({
    "title": "",
    "symbol": "",
    "profit": "",
    "exchange": ""
  })

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "Stocks", sideBarMenuKey: "1" }
    });
  }, [dispatch]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name: {modalValues.title} <br />
            symbol: {modalValues.symbol} <br />
            profit : {modalValues.profit} <br />
            exchange:  {modalValues.exchange} <br />
          </Typography>
        </Box>
      </Modal>

      <ReactVirtualizedTable
        columnsValue={TableColumns}
        columnsData={tableData}
        onRowClick={event => {
          //console.log(event)
          setOpen(true);
          setModalValues({
            ...modalValues,
            title: event.rowData.name,
            exchange: event.rowData.exchange,
            symbol: event.rowData.symbol,
            profit: event.rowData.profit
          })
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

export default Equity;


