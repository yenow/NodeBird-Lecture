import React, { useState } from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd"; // Row, Col  :  반응형 UI를 지원
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

/* 
UI 설계 원칙
1. 가로를 나누고 새로를 나눈다
2. 반응형 디자인은 모바일을 먼저 해야한다. 
*/

/*
특정 컴포넌트끼리 공통인 부분은 AppLayout.js처럼 레이아웃 파일을 만들어서 개별컴포넌트를 감싸는 방향으로
*/
const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>노드버드</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Input.Search
              enterButton
              style={{ verticalAlign: "middle" }}
            ></Input.Search>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          {/* gutter = Col사이의 간격 */}
          <Col xs={24} md={6}>
            {isLoggedIn ? <UserProfile /> : <LoginForm />}
          </Col>
          <Col xs={24} md={12}></Col>
          <Col xs={24} md={6}>
            <a
              href="https://github.com/yenow"
              target="_blank"
              rel="noreferrer noopener"
            >
              made by sinyoung
            </a>
          </Col>
        </Row>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
