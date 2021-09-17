import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from "../store/ConfigureStore";


const NodeBird = ({ Component }) => {


  return (
      /*<Provider store={store}></Provider>  :  기존 리덕스는 이렇게 감싸주는 부분이 있는데, next-reduex-wrapper(강의 버전)에서 알아서 감싸줌 */
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
