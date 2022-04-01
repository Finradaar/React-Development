import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../reducers/types";

export default function Downlaod() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "Downlaod", sideBarMenuKey: "3" }
    });
  }, [dispatch]);

  return (
    <Fragment>
      <h1>This is a Download component </h1>
    </Fragment>
  );
}
