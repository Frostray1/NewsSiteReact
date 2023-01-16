import { UserOutlined } from "@ant-design/icons";
import { Avatar, Input, Button, Dropdown, Form } from "antd";
import { NotificationOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, token } from "hooks/use-auth";
import { removeUser } from "store/slices/userSlice";
import { useDispatch } from "react-redux";
import { doc, getFirestore } from "firebase/firestore";
import readDocument from "hooks/read-data-user";



function Header() {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  const firestore = getFirestore();
  // console.log("firestore ",firestore)
    const db = doc(firestore, 'users/'+ email)
    // console.log("db ",db)

  const items = [
    {
      key: "1",
      label: <Link to="/profile">Профиль</Link>,
    },
    {
      key: "2",
      label: <Link to="/profile-setting">Настройки</Link>,
    },
    {
      key: "3",
      label: (
        <Link to="/" onClick={() => dispatch(removeUser())}>
         Выйти
        </Link>
      ),
    },
  ];
  // const [urlAvatar, setUrlAvatar] = useState(null);
  // useEffect(() => {
  //   readDocument(email)
  //     .then((result) => {
  //       if (result) {
  //         const { urlAvatar } = result;
  //         console.log(urlAvatar);
  //         setUrlAvatar(urlAvatar)
  //       }
  //     })
  //     .catch((err) => {
  //       console.warn("Something went wrong!", err);
  //     });
  // }, [email]);




  return isAuth ? (
    <>
      <div className="header__container">
        <div className="logo">
          <Link className="logo__text" to="/">
            News Info
          </Link>
        </div>
        <Input className="search__input" placeholder="Поиск" />
        <div className="profile">
          <NotificationOutlined
            className="profile__notification"
            style={{ fontSize: "24px" }}
          />
          <Dropdown
            menu={{
              items,
            }}
          >
            <Link to="/profile">
              <Avatar
                className="profile__icon"
                style={{ backgroundColor: "#fff", color: "#000" }}
                shape="square"
                size="large"
                icon={<UserOutlined/>}
              />
            </Link>
          </Dropdown>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="header__container">
        <div className="logo">
          <h1>News Info</h1>
        </div>
        <Input className="search__input" placeholder="Поиск" />
        <div className="profile">
          <Link to="/login">
            <Avatar
              className="profile__icon"
              style={{ backgroundColor: "#fff", color: "#000" }}
              shape="square"
              size="large"
              icon={<UserOutlined />}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
