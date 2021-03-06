import React from "react";
import { AppDispatch } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Auth.module.css";
import Modal from "react-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button, CircularProgress } from "@material-ui/core";

import { 
  fetchAsyncGetTargets, 
  fetchAsyncGetComments, 
  fetchAsyncGetMyTarget,
  // selectMyTarget
} from "../target/targetSlice";

import {
  // useSelect
  selectIsLoadingAuth,
  selectOpenSignIn,
  selectOpenSignUp,
  //Reducer
  setOpenSignIn,
  resetOpenSignIn,
  setOpenSignUp,
  resetOpenSignUp,
  //非同期
  fetchCredStart,
  fetchCredEnd,
  fetchAsyncLogin,
  fetchAsyncRegister,
  fetchAsyncGetMyProf,
  fetchAsyncGetProfs,
  fetchAsyncCreateProf,
} from "./authSlice";

// モーダルのStyle
const customStyles = {
  overlay: {
    backgroundColor: "#777777",
  },
  content: {
    top: "50%",
    left: "50%",

    width: 300,
    height: 380,
    padding: "50px",

    transform: "translate(-50%, -50%)",
  },
};

const Auth: React.FC = () => {
  //index.tsxのid指定
  Modal.setAppElement("#root");
  const openSignIn = useSelector(selectOpenSignIn);
  const openSignUp = useSelector(selectOpenSignUp);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      {/* 新規登録 */}
      <Modal
        isOpen={openSignUp}
        onRequestClose={async () => {
          await dispatch(resetOpenSignUp());
        }}
        style={customStyles}
      >
        <Formik
          initialErrors={{ email: "required" }}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await dispatch(fetchCredStart());
            const resultReg = await dispatch(fetchAsyncRegister(values));
            if (fetchAsyncRegister.fulfilled.match(resultReg)) {
              await dispatch(fetchAsyncLogin(values));
              await dispatch(fetchAsyncCreateProf({ nickName: "nickName",userProfile:resultReg.payload.id}));
              await dispatch(fetchAsyncGetProfs());
              await dispatch(fetchAsyncGetTargets());
              await dispatch(fetchAsyncGetComments());
              await dispatch(fetchAsyncGetMyProf());
              await dispatch(fetchAsyncGetMyTarget());
            }
            await dispatch(fetchCredEnd());
            await dispatch(resetOpenSignUp());
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("email format is wrong")
              .required("email is must"),
            password: Yup.string().required("password is must").min(4),
          })}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <div className={styles.auth_signUp}>
                  <h1 className={styles.auth_title}>新規登録</h1>
                  <br />
                  <div className={styles.auth_progress}>
                    {isLoadingAuth && <CircularProgress />}
                  </div>
                  <br />

                  <TextField
                    placeholder="email"
                    type="input"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <br />
                  {touched.email && errors.email ? (
                    <div className={styles.auth_error}>{errors.email}</div>
                  ) : null}

                  <TextField
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className={styles.auth_error}>{errors.password}</div>
                  ) : null}
                  <br />
                  <br />

                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                    type="submit"
                  >
                    登録
                  </Button>
                  <br />
                  <br />
                  <span
                    className={styles.auth_text}
                    onClick={async () => {
                      await dispatch(setOpenSignIn());
                      await dispatch(resetOpenSignUp());
                    }}
                  >
                    すでにアカウントをお持ちの方はこちら
                  </span>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </Modal>
      {/* ログイン */}
      <Modal
        isOpen={openSignIn}
        onRequestClose={async () => {
          await dispatch(resetOpenSignIn());
        }}
        style={customStyles}
      >
        <Formik
          initialErrors={{ email: "required" }}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await dispatch(fetchCredStart());
            const result = await dispatch(fetchAsyncLogin(values));
            if (fetchAsyncLogin.fulfilled.match(result)) {
              await dispatch(fetchAsyncGetProfs());
              await dispatch(fetchAsyncGetTargets());
              await dispatch(fetchAsyncGetComments());
              await dispatch(fetchAsyncGetMyProf());
              await dispatch(fetchAsyncGetMyTarget());
            }else{
              alert("ログインできませんでした！")
            }
            await dispatch(fetchCredEnd());
            await dispatch(resetOpenSignIn());
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("email format is wrong")
              .required("email is must"),
            password: Yup.string().required("password is must").min(4),
          })}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <div className={styles.auth_signUp}>
                  <h1 className={styles.auth_title}>ログイン</h1>
                  <br />
                  <div className={styles.auth_progress}>
                    {isLoadingAuth && <CircularProgress />}
                  </div>
                  <br />

                  <TextField
                    placeholder="email"
                    type="input"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  {touched.email && errors.email ? (
                    <div className={styles.auth_error}>{errors.email}</div>
                  ) : null}
                  <br />

                  <TextField
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className={styles.auth_error}>{errors.password}</div>
                  ) : null}
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!isValid}
                    type="submit"
                  >
                    ログイン
                  </Button>
                  <br />
                  <br />
                  <span
                    className={styles.auth_text}
                    onClick={async () => {
                      await dispatch(resetOpenSignIn());
                      await dispatch(setOpenSignUp());
                    }}
                  >
                    アカウントをまだ持っていない方はこちら
                  </span>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default Auth;
