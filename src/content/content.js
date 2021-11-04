import {useEffect, useState, useContext} from "react";
import {FirebaseContext} from "../firebase/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const {firebase} = useContext(FirebaseContext);

  useEffect(() =>{
    firebase.firestore().collection(target).get().then((snapshot) =>{ // находит target
      const allContent = snapshot.docs.map((contentObj) => ({ // созданиет новый массив
        ...contentObj.data(), // интегрирует DOM
        docId: contentObj.id, // присваивает id
      }));

      setContent(allContent); // задает ранее созданный массив значений
    }).catch((error) =>{ // отлавливает ошибки
      console.log(error.message);
    });
  }, []);

  return {[target]: content};
}