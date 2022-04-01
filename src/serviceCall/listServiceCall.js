import { useEffect } from "react";
import { settings } from "../config/settings"

export const ListCall = async (e) => {

  var raw = JSON.stringify({
    "data_type": "dayend",
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
    "group_by": "symbol"
  });

  var requestOptions = {
    method: 'POST',
    // headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  console.log("fetch is about to call!!!")
  var dataResponse = [];
  await fetch(settings.baseurl + settings.serviceEndpoints.List, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.data)
      dataResponse = result.data;

    })
    .catch(error => {
      console.log('error', error);
      return (error)
    });

  console.log("fetch closed*** ", dataResponse)
  return dataResponse


}

export const useListApiCall = () => {
  var dataResponse = [];

  const body = JSON.stringify({
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

  useEffect(() => {
    fetch(settings.baseURL + settings.endpoints.orders_list, { method: "POST", body: body })
      .then(response => response.json())
      .then(result => {
        console.log("api call result --> ", result.data);
        dataResponse.push(JSON.stringify(result.data));
        return { dataResponse };
      })
      .catch(error => {
        console.log(error)
        return (error)
      })
  }, 1000)


}