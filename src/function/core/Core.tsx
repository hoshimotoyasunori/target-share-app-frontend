import React, { useEffect }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import {Button} from "@material-ui/core";

import styles from "./Core.module.css"

import Main from "../../pages/Main";
import Mypage from "../../pages/Mypage";
import Top from "../../pages/Top";
import Auth from "../auth/Auth";
import HomeIcon from '../../public/home.png';
import MenIcon from '../../public/men.png';
import LogoutIcon from '../../public/logout.png';
import LogInIcon from '../../public/login.png';
import RegisterIcon from '../../public/register.png';

import {
  selectOpenMypage,
  selectProfile,
    //Reducer
    setOpenSignIn,
    resetOpenSignIn,
    setOpenSignUp,
    resetOpenSignUp,
    setOpenMypage,
    resetOpenMypage,
    resetOpenProfile,
    editNickName,
    editId,
    //非同期
    fetchAsyncGetMyProf,
    fetchAsyncGetProfs,
} from "../auth/authSlice";

import {
  //Reducer
  resetOpenNewTarget,
  resetOpenEditMyTarget,
  //非同期
  fetchAsyncGetMyTarget,
  fetchAsyncGetTargets,
  fetchAsyncGetComments,
} from "../target/targetSlice";


const Core: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const openMypage = useSelector(selectOpenMypage);

  useEffect(() => {
    const fetchBootLoader = async () => {
      if (localStorage.localJWT) {
        dispatch(resetOpenSignIn());
        const result = await dispatch(fetchAsyncGetMyProf());
        if (fetchAsyncGetMyProf.rejected.match(result)) {
          return null;
        }
        await dispatch(fetchAsyncGetTargets());
        await dispatch(fetchAsyncGetProfs());
        await dispatch(fetchAsyncGetMyTarget());
        await dispatch(fetchAsyncGetComments());
      }
    };
    fetchBootLoader();
  }, [dispatch]);

  return (
    <>
      <Auth />

      <header className={styles.core_header}>
        <h1 className={styles.core_title}>Target</h1>
      </header>

      <main className={styles.main}>
        {!profile?.id ? 
          <Top /> 
        :
          <>{openMypage ?  <Mypage /> : <Main/>}</>
        }
      </main>

      <footer className={styles.core_footer}>
          {!profile?.id ?
              <div className={styles.core_logout}>
                  <Button
                      className={styles.auth}
                      onClick={() => {
                          dispatch(setOpenSignIn());
                          dispatch(resetOpenSignUp());
                      }}
                  >
                      <div className={styles.iconbox}>
                          <input type="image" src = {LogInIcon} alt="login" className={styles.image}/>
                          <p>ログイン</p>
                      </div>
                  </Button>
                  <Button
                      className={styles.auth}
                      onClick={() => {
                          dispatch(setOpenSignUp());
                          dispatch(resetOpenSignIn());
                      }}
                  >
                      <div className={styles.iconbox}>
                          <input type="image" src = {RegisterIcon} alt="signup" className={styles.image}/>
                          <p>新規登録</p>
                      </div>
                  </Button>
              </div>
          :
              <div className={styles.core_logout}>
                  <Button
                      onClick={() => {
                      dispatch(resetOpenMypage());
                      dispatch(resetOpenEditMyTarget());
                      }}
                  >
                      <div className={styles.iconbox}>
                          <input type="image" src = {HomeIcon} alt="home" className={styles.image}/>
                          <p>Home</p>
                      </div>
                  </Button>
                  <Button
                      onClick={() => {
                      dispatch(setOpenMypage());
                      dispatch(resetOpenEditMyTarget());
                      }}
                  >
                      <div className={styles.iconbox}>
                          <input type="image" src = {MenIcon} alt="men" className={styles.image}/>
                          <p>Mypage</p>
                      </div>
                  </Button>
                  <Button
                      onClick={() => {
                      localStorage.removeItem("localJWT");
                      dispatch(editNickName(""));
                      dispatch(editId(""));
                      dispatch(resetOpenProfile());
                      dispatch(resetOpenNewTarget());
                      dispatch(resetOpenEditMyTarget());
                      // dispatch(resetIsLoggedIn());
                      // dispatch(selectProfile(""));
                      alert("logoutしました！")
                      }}
                  >
                      <div className={styles.iconbox}>
                          <input type="image" src = {LogoutIcon} alt="logout" className={styles.image}/>
                          <p>Logout</p>
                      </div>
                  </Button>
              </div>
          }
      </footer>
    </>
  );
};

export default Core;