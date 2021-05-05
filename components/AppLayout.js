import React from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

/*
특정 컴포넌트끼리 공통인 부분은 AppLayout.js처럼 레이아웃 파일을 만들어서 개별컴포넌트를 감싸는 방향으로
*/

const AppLayout = ({ children }) => {
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
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
