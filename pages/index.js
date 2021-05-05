import React from 'react';  //  next.js에서는 이게 필요가 없음,  아직 좀더 봐야함(주석하니까 실행이 안됬음)
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;