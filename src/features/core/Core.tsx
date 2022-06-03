import React from "react";
import { useSelector} from "react-redux";

import Header from "./Header";
import Main from "../../pages/Main";
import Mypage from "../../pages/Mypage";
import Top from "../../pages/Top";

import {
  selectOpenMypage,
  selectProfile
} from "../auth/authSlice";
import styles from "./Core.module.css"


const Core: React.FC = () => {
  const profile = useSelector(selectProfile);
  const openMypage = useSelector(selectOpenMypage);

  return (
    <>
      <Header />
      <main className={styles.main}>
        { profile?.nickName ? <>{ openMypage ?  <Mypage /> : <Main/>}</>
          :<Top/>
        }
      </main>
    </>
  );
};

export default Core;