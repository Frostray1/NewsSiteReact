
import { Button, Form, Input, Modal, Upload} from "antd";
import { useAuth } from "hooks/use-auth";
import writeUserData from "../WriteUserData";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import readDocument from '../../hooks/read-data-user'



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
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const userData = readDocument(email, form);
 
    userData.then((userDataResult) => {
      form.setFieldsValue(userDataResult);
    });


    const normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
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
     <Form.Item label="Аватар">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
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
//
