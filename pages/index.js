import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1].id,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll); // window이벤트 리스터 등록했으면, unmount될때 해제시켜줘야지 메모리 낭비가 없음
    };
  }, [mainPosts, hasMorePost, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </AppLayout>
  );
};

export default Home;
