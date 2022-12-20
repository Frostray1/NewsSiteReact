
import { doc, setDoc, getFirestore } from "firebase/firestore";


function writeUserData(userId, email, valuesInput) {
 
    const firestore = getFirestore();
    console.log(firestore)
    const db = doc(firestore, 'users/'+ email)
    const usersData = {
      userId: userId,
      username: valuesInput.nickname,
      email: email,
      aboutUser: valuesInput.aboutUser,
      // gender: gender,
    }
    setDoc(db, usersData);
  
  }

  export default writeUserData