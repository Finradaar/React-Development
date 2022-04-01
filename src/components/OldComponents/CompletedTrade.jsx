import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../reducers/types";

export default function CompeleteTrade() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "CompleteTrade", sideBarMenuKey: "6" }
    });
  }, [dispatch]);

  return (
    <Fragment>
      <h1>This is a Complete Trade component </h1>
    </Fragment>
  );
}
