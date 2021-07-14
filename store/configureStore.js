// configureStore.js
import { createWrapper } from 'next-redux-wrapper';

const configureStore = () => {};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development', // debug가 true면 좀더 자세한 설명이 나온다고함
});

export default wrapper;
