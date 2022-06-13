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
  resetOpenSignIn,
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
  resetOpenEditMyTarget,
  //非同期
  fetchAsyncGetMyTarget,
  fetchAsyncGetTargets,
  fetchAsyncGetComments,
} from "../target/targetSlice";

import Auth from "../auth/Auth";


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
        {profile?.nickName &&
          <>
            <div className={styles.core_logout}>
              {(isLoadingTarget || isLoadingAuth) && <CircularProgress />}
              <Button
                onClick={() => {
                  dispatch(resetOpenMypage());
                  dispatch(resetOpenEditMyTarget());
                }}
              >
                <p>Home</p>
              </Button>
              <Button
                onClick={() => {
                  dispatch(setOpenMypage());
                  dispatch(resetOpenEditMyTarget());
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
                  dispatch(resetOpenEditMyTarget());
                  // dispatch(resetOpenMypage());
                  alert("logoutしました！")
                }}
              >
                <p>Logout</p>
              </Button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;