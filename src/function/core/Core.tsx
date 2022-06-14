import React from "react";
import { useSelector} from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Main from "../../pages/Main";
import Mypage from "../../pages/Mypage";
import Top from "../../pages/Top";

import {
  selectOpenMypage,
  // selectProfile,
  selectIsLoggedIn,
} from "../auth/authSlice";
import styles from "./Core.module.css"


const Core: React.FC = () => {
  // const profile = useSelector(selectProfile);
  const openMypage = useSelector(selectOpenMypage);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header />
      <main className={styles.main}>
      {isLoggedIn && <>{ openMypage ?  <Mypage /> : <Main/>}</>}
      {!isLoggedIn && <Top />}
        {/* { profile?.nickName ? <>{ openMypage ?  <Mypage /> : <Main/>}</>
          :<Top/>
        } */}
      
      </main>
      <Footer />
    </>
  );
};

export default Core;