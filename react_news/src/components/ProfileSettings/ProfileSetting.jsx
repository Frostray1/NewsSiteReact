import { useEffect, useState } from "react";
import { Button, Form, Input, message, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

import { useAuth } from "hooks/use-auth";
import readDocument from "../../hooks/read-data-user";
import writeUserData from "../WriteUserData";
// import {storage} from "../../firebase"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UploadAvatar from "./UploadAvatar"
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

const ProfileSetting = () => {
  const { id, email } = useAuth();
  const [form] = Form.useForm();

  useEffect(() => {
    readDocument(email, form)
      .then((result) => {
        if (result) {
          const { username, aboutUser } = result;
          form.setFieldsValue({ username, aboutUser });
        }
      })
      .catch((err) => {
        console.warn("Something went wrong!", err);
      });
  }, [email, form]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [image, setImage] = useState(null);

  
  const handleChange = (e) => {
    console.log("Upload event:", e.target.files[0]);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storage = getStorage();
    const uploadTask = ref(storage, `images/${image.name}-${email}`);
    uploadBytes(uploadTask, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
    console.log("Загрузка изображения");
    getUrlImage(uploadTask);
  };

  const getUrlImage = (uploadTask) => {
    console.log("Получение ЮРЛ");
    getDownloadURL(uploadTask)
      .then((url) => {
        console.log(url);
        // Or inserted into an <img> element
        // const img = document.getElementById("myimg");
        // img.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  };
  
  return (
    <Form
      className="profileSetting"
      {...formItemLayout}
      form={form}
      name="setting"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item label="Upload" valuePropName="fileList">
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <UploadAvatar/>
      </Form.Item>

      <Form.Item
        name="username"
        label="Ник"
        tooltip="Как другие будут видеть тебя?"
      >
        <Input />
      </Form.Item>

      <Form.Item name="aboutUser" label="О себе">
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          onClick={() => writeUserData(id, email, form.getFieldsValue())}
          type="primary"
          htmlType="submit"
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileSetting;
