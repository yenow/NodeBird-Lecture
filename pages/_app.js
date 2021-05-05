/* 페이지들의 공통적인 부분 처리 */

import { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head"; // HEAD 컴포넌트
import "antd/dist/antd.css";

const App = ({ Component }) => {
  // Component가 모든페이지의 컴포넌트를 말하는듯 싶다..
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
