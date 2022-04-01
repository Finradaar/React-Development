import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//icons import
import {
  FcLineChart,
  FcPositiveDynamic,
} from "react-icons/fc";
import { IoSunnySharp } from "react-icons/io5";


import { useDispatch } from 'react-redux';
import { CURRENT_COMPONENT } from '../../reducers/types';
//import tabs
import Dayend from './Dayend/Dayend';
import Options from './Options/Options';
import Equity from './Equity/Equity'



function TabPanel(props) {
  const { children, value, index } = props;

  console.log("value --> ",value, "children --> ", children)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}

    >
      {value === index && (
        <Box >
          
            {children}
          
        </Box>
      )}
    </div>
  );
}



function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function StockLayout() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "Stocks", sideBarMenuKey: "1" }
    });
  }, [dispatch]);


  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          // variant="fullWidth"
          // aria-label="full width tabs example"
        >
          <Tab iconPosition="start" label="Equity" icon={<FcLineChart />} />
          <Tab iconPosition='start' label="Options" icon={<FcPositiveDynamic />} />
          <Tab iconPosition='start' label="Dayend" icon={<IoSunnySharp />} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Equity />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Options />

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
           <Dayend />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
