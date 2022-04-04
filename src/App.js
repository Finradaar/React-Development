import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "antd/dist/antd.css";

import { Layout } from "antd";
import HomePageLayout from "./Layouts";
import Login from "./components/Login/Login";


export default function App() {
  return (
    <Provider store={store}>
      <Layout style={{background: "#303030"}}>
          {/* <Login /> */}
          < HomePageLayout />
        </Layout>
    </Provider>
  );
}
