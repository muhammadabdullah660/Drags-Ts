import { createContext, useState, useEffect } from "react";
//import shopData from "../../src/shopData.js";
import { getCategoriesAndDocuments } from "../utils/Firebase/firebase.js";
export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});
export default function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };
  // store the shop data in firestore(one time)
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", shopData);
  // }, []);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      // console.log(categoriesMap);
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
