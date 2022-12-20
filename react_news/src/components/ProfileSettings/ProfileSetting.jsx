import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { useAuth } from "hooks/use-auth";
import writeUserData from "../WriteUserData";
import { collection, getDoc } from "firebase/firestore"; 
import { doc, setDoc, getFirestore } from "firebase/firestore";


class userData {
  constructor (userId, name, email, aboutUser ) {
      this.userId = userId;
      this.username = name;
      this.email = email;
      this.aboutUser = aboutUser
  }
  toString() {
      return this.userId + ', ' + this.username + ', ' + this.email + ', ' + this.aboutUser ;
  }
}

// Firestore data converter
const userDataConverter  = {
  toFirestore: (userData) => {

      return {
        userId: userData.userId,
        username: userData.username,
        email: userData.email,
        aboutUser: userData.aboutUser
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new userData(data.userId, data.username, data.email,data.aboutUser);
      
  }
};





async function readDocument(email){
  const firestore = getFirestore();

  const db = doc(firestore, 'users/'+ email).withConverter(userDataConverter);
  const docSnap = await getDoc(db);
  if (docSnap.exists()) {

    const user = docSnap.data();
    // console.log(user)
    return user;
  } else {
    console.log("No such document!");
  }


}




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


 

  
  // form.initialValues( objqwe )
  const [user1, setUser1] = useState("")
  useEffect(
    ()=>{
      const user = readDocument(email);
      user.then(setUser1)
      
    },[]
    
  )
  form.setFieldValue('nickname',user1.username)
  form.setFieldValue('aboutUser',user1.aboutUser)
  // const user = readDocument(email);
  //   console.log(user)
  //   user.then(result => console.log(result))
  //   user1.then((result) => {setUser1(result);form.setFieldsValues({'nickname':result})})
    console.log(user1.username)
    // console.log(user1.aboutUser)
    // console.log(user1.email)
    // form.setFieldValue()

    // 
    //   })
    // 


  return (
    
    <Form
      className="profileSetting"
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
      >
        <Input 
        // value={userName} 
        // onChange={(e) => setUserName(e.target.value)}
       />
      </Form.Item>

      <Form.Item name="aboutUser" label="О себе">
        <Input.TextArea
          showCount
          maxLength={100}
          // value={aboutUser}
          // onChange={(e) => setAboutUser(e.target.value)}
        />
      </Form.Item>
      
      <Form.Item {...tailFormItemLayout}>
        <Button
          onClick={() => writeUserData(id, email, form.getFieldsValue())
          }
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