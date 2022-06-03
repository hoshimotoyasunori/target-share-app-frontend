import React, { useEffect} from "react";
import styles from "./Core.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import {Button,CircularProgress} from "@material-ui/core";

import {
  editNickName,
  selectProfile,
  selectIsLoadingAuth,
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  resetOpenProfile,
  setOpenMypage,
  resetOpenMypage,
  fetchAsyncGetMyProf,
  fetchAsyncGetProfs,
} from "../auth/authSlice";

import {
  selectIsLoadingTarget,
  resetOpenNewTarget,
  fetchAsyncGetMyTarget,
  fetchAsyncGetTargets,
  fetchAsyncGetComments,
} from "../target/targetSlice";

import Auth from "../auth/Auth";
import EditProfile from "./EditProfile";
import NewTarget from "./NewTarget";


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
          dispatch(setOpenSignIn());
          return null;
        }
        await dispatch(fetchAsyncGetTargets());
        await dispatch(fetchAsyncGetMyTarget());
        await dispatch(fetchAsyncGetProfs());
        await dispatch(fetchAsyncGetComments());
      }
    };
    fetchBootLoader();
  }, [dispatch]);

  return (
    <div>
      <Auth />
      <EditProfile />
      <NewTarget />

      <div className={styles.core_header}>
        <h1 className={styles.core_title}>Target App</h1>
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
                  dispatch(setOpenSignIn());
                  dispatch(resetOpenMypage());
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