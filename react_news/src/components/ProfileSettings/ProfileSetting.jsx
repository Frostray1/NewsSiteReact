import React, { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useAuth, token } from "hooks/use-auth";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};

function writeUserData(userId, name, email,aboutUser) {
  const firestore = getFirestore();

  const db = doc(firestore, 'users/'+email)
  const usersData = {
    userId: userId,
    username: name,
    email: email,
    aboutUser: aboutUser,
    // gender: gender,
  }
  setDoc(db, usersData);

}

 

const ProfileSetting = () => {
  
  const [userName, setUserName] = useState('');
  const [aboutUser, setAboutUser] = useState('');
  const { isAuth, id,email} = useAuth();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form className="profileSetting"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      
    >

      <Form.Item
        name="nickname"
        label="Ник"
        tooltip="Как другие будут видеть тебя?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
          
        ]}
      >
        <Input 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="intro"
        label="О себе"
        rules={[
          {
            required: true,
            message: "Please input Intro",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100}
        value={aboutUser} 
        onChange={(e) => setAboutUser(e.target.value)}
         />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button onClick={() => writeUserData(id, userName, email, aboutUser)} type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ProfileSetting;
