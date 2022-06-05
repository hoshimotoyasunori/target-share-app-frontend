import React, { useEffect} from "react";
import styles from "./Core.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import {Button,CircularProgress} from "@material-ui/core";

import {
  // useSelect
  selectProfile,
  selectIsLoadingAuth,
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
  selectIsLoadingTarget,
  //Reducer
  resetOpenNewTarget,
  //非同期
  fetchAsyncGetMyTarget,
  fetchAsyncGetTargets,
  fetchAsyncGetComments,
} from "../target/targetSlice";

import Auth from "../auth/Auth";
// import EditProfile from "./modal/EditProfile";
// import NewTarget from "./modal/NewTarget";


const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const isLoadingTarget = useSelector(selectIsLoadingTarget);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);

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

      <div className={styles.core_header}>
        <h1 className={styles.core_title}>Target</h1>
        {profile?.nickName ? (
          <>
            <div className={styles.core_logout}>
              {(isLoadingTarget || isLoadingAuth) && <CircularProgress />}
              <Button
                onClick={() => {
                  dispatch(resetOpenMypage());
                }}
              >
                <p>Target</p>
              </Button>
              <Button
                onClick={() => {
                  dispatch(setOpenMypage());
                }}
              >
                <p>Mypage</p>
              </Button>
              <Button
                onClick={() => {
                  localStorage.removeItem("localJWT");
                  dispatch(editNickName(""));
                  dispatch(resetOpenProfile());
                  dispatch(resetOpenNewTarget());
                  // dispatch(resetOpenMypage());
                  alert("logoutしました！")
                }}
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <div>
            <Button
              onClick={() => {
                dispatch(setOpenSignIn());
                dispatch(resetOpenSignUp());
              }}
            >
              LogIn
            </Button>
            <Button
              onClick={() => {
                dispatch(setOpenSignUp());
                dispatch(resetOpenSignIn());
              }}
            >
              SignUp
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;