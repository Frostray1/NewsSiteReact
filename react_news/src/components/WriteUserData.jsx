
import { doc, setDoc, getFirestore } from "firebase/firestore";


function writeUserData(userId, email, valuesInput , urlImage) {
 
    const firestore = getFirestore();
    console.log(firestore)
    const db = doc(firestore, 'users/'+ email)
    const usersData = {
      userId: userId,
      username: valuesInput.username,
      email: email,
      aboutUser: valuesInput.aboutUser,
      urlAvatar: urlImage,
      // gender: gender,
    }
    console.log("-----",usersData)
    setDoc(db, usersData);
  
  }

  export default writeUserData