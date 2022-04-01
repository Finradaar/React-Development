import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CURRENT_COMPONENT } from "../reducers/types";

export default function BiddingTrade() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CURRENT_COMPONENT,
      payload: { component: "BiddingTrade", sideBarMenuKey: "5" }
    });
  }, [dispatch]);

  return (
    <Fragment>
      <h1>This is a Bidding Trade component </h1>
    </Fragment>
  );
}
