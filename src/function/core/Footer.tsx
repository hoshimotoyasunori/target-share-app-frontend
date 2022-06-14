import React, { useEffect} from "react";
import styles from "./Core.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import {Button} from "@material-ui/core";

import {
  // useSelect
  // selectProfile,
//   selectIsLoadingAuth,
  selectIsLoggedIn,
  resetIsLoggedIn,
  //Reducer
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  setOpenMypage,
  resetOpenMypage,
  resetOpenProfile,
  editNickName,
  //非同期
  fetchAsyncGetMyProf,
  fetchAsyncGetProfs,
} from "../auth/authSlice";

import {
  // useSelect
//   selectIsLoadingTarget,
  //Reducer
  resetOpenNewTarget,
  resetOpenEditMyTarget,
  //非同期
  fetchAsyncGetMyTarget,
  fetchAsyncGetTargets,
  fetchAsyncGetComments,
} from "../target/targetSlice";

import Auth from "../auth/Auth";
import HomeIcon from '../../public/home.png';
import MenIcon from '../../public/men.png';
import LogoutIcon from '../../public/logout.png';
import LogInIcon from '../../public/login.png';
import RegisterIcon from '../../public/register.png';


const Footer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  // const profile = useSelector(selectProfile);
//   const isLoadingTarget = useSelector(selectIsLoadingTarget);
//   const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const fetchBootLoader = async () => {
      if (localStorage.localJWT) {
        dispatch(resetOpenSignIn());
        const result = await dispatch(fetchAsyncGetMyProf());
        if (fetchAsyncGetMyProf.rejected.match(result)) {
          // dispatch(setOpenSignIn());
          return null;
        }
        await dispatch(fetchAsyncGetTargets());
        await dispatch(fetchAsyncGetProfs());
        // await dispatch(fetchAsyncGetMyProf());
        await dispatch(fetchAsyncGetMyTarget());
        await dispatch(fetchAsyncGetComments());
      }
    };
    fetchBootLoader();
  }, [dispatch]);

  return (
    <div>
        <Auth />

        <div className={styles.core_footer}>
            <>
            {!isLoggedIn ? 
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
                        dispatch(resetOpenProfile());
                        dispatch(resetOpenNewTarget());
                        dispatch(resetOpenEditMyTarget());
                        dispatch(resetIsLoggedIn());
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
               
            </>
        </div>
    </div>
  );
};

export default Footer;