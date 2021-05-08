import React, { useState, useCallback, useMemo } from "react";
import { Input, Button, Form } from "antd";
import Link from "next/link";
import styled from "styled-components"; // 스타일 컴포넌트?

const ButtonWrapper = styled.div`
  margin-top: 10px;
`; // 여기 안에는 css적듯이 적으면 된다

/*
함수형 컴포넌트가 리렌더링 될때
함수가 다시 실행되지만, return 부분에서 다시 다 그리는것이 아니라, 바뀐부분만 리렌더링한다.
*/

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("tlsdudcjswo");
  const [password, setPassword] = useState("ysy5089");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const style = useMemo(() => {
    {
      margin: 10;
    }
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      // ant Design에서는 onFinish에 e.preventDefault();가 적용이 되어있다고한다.
      console.log(id, password);
      setIsLoggedIn(true);
    },
    [id, password],
  );

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          value={id}
          onChange={onChangeId}
          placeholder="아이디"
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        {" "}
        {/*style={{ margin: "10px" }}*/}
        {/* 스타일에 객체 넣으면 안된다고함. {} === {} 의 값이 false가 나오는데 당연하 다른 객체니까 이렇게 되는건데
            이 컴포넌트가 리렌더링 될때, style의 값이 다른 객체를 참조하니까 하위 컴포넌트들을 모두 리렌더링하게됨
            대안 : 
            1. ButtonWrapper 라는 스타일이 적용된 컴포넌트를 만든다. 그리고 바꾸고 싶은 객체를 감싼다?
            2. useMemo를 통해서
        */}
        <ButtonWrapper>
          <Button htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </div>
    </FormWrapper>
  );
};

export default LoginForm;
