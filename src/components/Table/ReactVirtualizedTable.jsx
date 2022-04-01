import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@mui/styles';
import { createTheme, createMuiTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { StockListColumns, TableColumns } from '../../tableColumns/TableDataColumns';
import { tableData } from '../../tableColumns/TableData';
import { useDispatch } from 'react-redux';
import { CURRENT_COMPONENT } from '../../reducers/types';
import { Box, Button, Icon, IconButton } from '@mui/material';

import { IoSunnySharp } from "react-icons/io5";
import { ThemeProvider } from 'styled-components';

const styles = (theme) => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    table: {
        // temporary right-to-left patch, waiting for
        // https://github.com/bvaughn/react-virtualized/issues/454
        '& .ReactVirtualized__Table__headerRow': {
            ...(theme.direction === 'rtl' && {
                paddingLeft: '0 !important',
            }),
            ...(theme.direction !== 'rtl' && {
                paddingRight: undefined,
            }),
        },
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: "#757575",
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 65,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={
                    (columnIndex != null && columns[columnIndex].numeric) || false
                        ? 'right'
                        : 'left'
                }
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}

                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}

                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}

                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                >

                                </Column>

                            );
                        })}


                    </Table>
                )}
            </AutoSizer>
        );
    }
}

MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            numeric: PropTypes.bool,
            width: PropTypes.number.isRequired,
        }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};

const defaultTheme = createTheme({});
const VirtualizedTable = withStyles(styles, { defaultTheme })(MuiVirtualizedTable);

// ---

const sample = [];

function createData(id,
    action,
    status,
    strategy,
    exchange,
    symbol,
    name,
    type,
    entry,
    enter_at,
    exit,
    exit_at,
    profit) {
    return {
        id,
        action,
        status,
        strategy,
        exchange,
        symbol,
        name,
        type,
        entry,
        enter_at,
        exit,
        exit_at,
        profit
    };
}


const rows = tableData;


export default function ReactVirtualizedTable(props) {


    console.log("window.innerHeight -->", window.innerHeight);
    const [tableData, setTableData] = useState(props.columnsData)
    const [pageSize, setPageSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        console.log("hello")
        
    }, [resize])

    function resize() {

        const height = window.innerHeight;
        const width = window.innerWidth;

        setPageSize({
            height: height,
            width: width
        })
        window.location.reload(false)
    }

    window.onresize = resize;

    return (

        <Box sx={{
            height: pageSize.height - 200,
            width: '100%',
        }}>

            <VirtualizedTable
                rowCount={tableData.length}
                rowGetter={({ index }) => tableData[index]}
                columns={props.columnsValue}
                onRowClick={props.onRowClick}
                onHeaderClick={props.onHeaderClick}
            />

        </Box>

    );
}
