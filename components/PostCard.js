import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';      // folder를 import하면 자동으로 index를 불러옴
import FollowButton from './FollowButton';
import {useSelector} from "react-redux";

const dummyComments = [{
  User: {
    nickname: 'nero',
  },
  content: '우와 개정판이 나왔군요~',
}, {
  User: {
    nickname: 'hero',
  },
  content: '얼른 사고싶어요~',
}];

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = ({ post }) => {
    const {user} = useSelector((state) => state.user);
    const id = user?.id;    // user && user.id    ->   user.id가 있으면 이 값이 들어가고, 없으면 undefined가 들어감


  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <CardWrapper key={post.id}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                  { id && id === post.User.id ? (
                      <>
                          <Button>수정</Button>
                          <Button danger>삭제</Button>
                      </>
                  ) : (<Button>신고</Button>)}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={<FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
        {/* 댓글 부분 */}
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${dummyComments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={dummyComments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};



PostCard.propTypes = {
    // PropTypes.object.requied 해도 되지만, Object 타입을 더 자세하게 적을수있다.
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })),
    createdAt: PropTypes.object,
  }),
};

export default PostCard;
