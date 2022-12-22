import {  getDoc } from "firebase/firestore";
import { doc, getFirestore } from "firebase/firestore";

class userData {
    constructor(userId, name, email, aboutUser,urlAvatar) {
      this.userId = userId;
      this.username = name;
      this.email = email;
      this.aboutUser = aboutUser;
      this.urlAvatar=urlAvatar
    }
    toString() {
      return (
        this.userId +
        ", " +
        this.username +
        ", " +
        this.email +
        ", " +
        this.aboutUser +
        ", " +
        this.urlAvatar
      );
    }
  }
  
  // Firestore data converter
  const userDataConverter = {
    toFirestore: (userData) => {
      return {
        userId: userData.userId,
        username: userData.username,
        email: userData.email,
        aboutUser: userData.aboutUser,
        urlAvatar: userData.urlAvatar,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new userData(data.userId, data.username, data.email, data.aboutUser, data.urlAvatar);
    },
  };
  
  async function readDocument(email, form) {
    const firestore = getFirestore();
  
    const db = doc(firestore, "users/" + email).withConverter(userDataConverter);
    const docSnap = await getDoc(db);
    // console.log(docSnap.data())
  
    if (docSnap.exists()) {
      const user = docSnap.data();
      return user;
      // form.setFieldsValue(docSnap.data())
    } else {
      console.log("No such document!");
    }
  }
export default readDocument