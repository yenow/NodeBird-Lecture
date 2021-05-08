import React, { useMemo } from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

function NicknameEditForm(props) {
  const style = useMemo(() => {
    return {
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
    };
  }, []);

  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정"></Input.Search>
    </Form>
  );
}

NicknameEditForm.propTypes = {};

export default NicknameEditForm;
