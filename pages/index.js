import React from 'react';
import { useSelector } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c.id} post={c} />  // index를 키를 쓰면 안좋음, 특히 지워질 가능성이 있거나 바뀔 가능성이 있으면 쓰면 안된다!
        );
      })}
    </AppLayout>
  );
};

export default Home;
