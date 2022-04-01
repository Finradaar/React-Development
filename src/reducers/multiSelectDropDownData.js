import { DAYEND_DATA, OPTIONS_DATA, STOCK_LIST } from "./types";

const initialState = {
  name: "",
  dayendDataStocksSelected: [],
  optionsDataStocksSelected: [],
  stocksListSelectedData: []
};

export default function (state = initialState, action) {

  switch (action.type) {
    case DAYEND_DATA:
      //console.log("dayend data = ", action.payload)
      return {
        ...state,
        name: action.payload.name,
        dayendDataStocksSelected: action.payload.dayendStocksSelected
      };
    case OPTIONS_DATA:
      
      return {
        ...state,
        name: action.payload.name,
        optionsDataStocksSelected: action.payload.optionStocksSelected
      };
    case STOCK_LIST:
      //console.log("stock list data reducer ", action.payload.stocksListSelected)
        return{
          ...state,
          name: action.payload.name,
          stocksListStocksSelected: action.payload.stocksListSelected
        }
    default:
      return state;
  }
}
