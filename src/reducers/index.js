import { combineReducers } from "redux";
import currentComponent from "./currentComponent";
import dayendDataStocksSelected from "./multiSelectDropDownData";
import optionsDataStocksSelected from "./multiSelectDropDownData";
import stocksListStocksSelected from "./multiSelectDropDownData";

export default combineReducers({
  currentcomponentReducer: currentComponent,
  optionsDataStocksSelectedReducer: optionsDataStocksSelected,
  dayendDataStocksSelectedReducer: dayendDataStocksSelected,
  stockListStocksSelectedReducer: stocksListStocksSelected,
});

