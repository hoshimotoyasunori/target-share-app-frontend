import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../Core.module.css";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

import {
  // useSelect
  selectProfile,
  selectOpenProfile,
  //Reducer
  resetOpenProfile,
  editNickName,
  //非同期
  fetchCredStart,
  fetchCredEnd,
  fetchAsyncUpdateProf,
} from "../function/auth/authSlice";

import { Button, TextField, IconButton } from "@material-ui/core";
import { MdAddAPhoto } from "react-icons/md";
import { 
  selectMyTarget,
  fetchAsyncUpdateMyTarget
 } from '../function/target/targetSlice';

const customStyles = {
  content: {
    top: "55%",
    left: "50%",

    width: 280,
    height: 220,
    padding: "50px",

    transform: "translate(-50%, -50%)",
  },
};

const EditMyTarget: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const openProfile = useSelector(selectOpenProfile);
  const profile = useSelector(selectProfile);
  const mytarget = useSelector(selectMyTarget);

  // const updateMyTarget = async (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   const packet = { 
  //     id: mytarget.id, 
  //     main: mytarget.main,
  //     sub1: mytarget.sub1
  //   };
  //   await dispatch(fetchCredStart());
  //   await dispatch(fetchAsyncUpdateMyTarget(packet));
  //   await dispatch(fetchCredEnd());
  //   await dispatch(resetOpenProfile());
  // };

  const handlerEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput?.click();
  };

  return (
    <>
      <Modal
        isOpen={openProfile}
        onRequestClose={async () => {
          await dispatch(resetOpenProfile());
        }}
        style={customStyles}
      >
        <form className={styles.core_signUp}>
          <h1 className={styles.core_title}>SNS clone</h1>

          <br />
          <TextField
            placeholder="nickname"
            type="text"
            value={profile?.nickName}
            inputProps={{style: {fontSize: '12px'} }} label="ニックネーム"
            onChange={(e) => dispatch(editNickName(e.target.value))}
          />

          {/* <input
            type="file"
            id="imageInput"
            hidden={true}
            onChange={(e) => setImage(e.target.files![0])}
          /> */}
          <br />
          <IconButton onClick={handlerEditPicture}>
            <MdAddAPhoto />
          </IconButton>
          <br />
          {/* <Button
            disabled={!profile?.nickName}
            variant="contained"
            color="primary"
            type="submit"
            onClick={updateProfile}
          >
            Update
          </Button> */}
        </form>
      </Modal>
    </>
  );
};

export default EditMyTarget;