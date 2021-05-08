import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "윤신영" },
    { nickname: "홍정수" },
  ];
  const followingList = [
    { nickname: "제로초A" },
    { nickname: "윤신영A" },
    { nickname: "홍정수A" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header="팔로잉 목록" data={followingList}></FollowList>
        <FollowList header="팔로워 목록" data={followerList}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
