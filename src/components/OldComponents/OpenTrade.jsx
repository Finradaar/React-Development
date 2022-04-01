import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../reducers/types";

export default function OpenTrade() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "OpenTrade", sideBarMenuKey: "4" }
    });
  }, [dispatch]);

 

  return (
    <Fragment>
      <h1>This is a Open Trade component </h1>
   
    </Fragment>
  );
}
