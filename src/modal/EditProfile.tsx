import React, { useState } from "react";
import Modal from "react-modal";

import styles from "../function/core/Core.module.css";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

import { File } from "../function/types";

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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",

    width: "300px",
    height: "35%",
    padding: "20px",
    display: "flex",
    transform: "translate(-50%, -50%)",
  },
};

const EditProfile: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const openProfile = useSelector(selectOpenProfile);
  const profile = useSelector(selectProfile);
  const [image, setImage] = useState<File | null>(null);

  const updateProfile = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const packet = { id: profile.id, nickName: profile.nickName,userProfile:profile.userProfile, img: image };
    console.log("packet")
    console.log(packet)
    await dispatch(fetchCredStart());
    await dispatch(fetchAsyncUpdateProf(packet));
    await dispatch(fetchCredEnd());
    await dispatch(resetOpenProfile());
  };

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
        <form className={styles.core_container}>
          <h1 className={styles.core_title}>プロフィールの編集</h1>

          <br />
          <TextField
            placeholder="アカウント名"
            type="text"
            value={profile?.nickName}
            inputProps={{style: {fontSize: '12px'} }} label="アカウント名"
            onChange={(e) => dispatch(editNickName(e.target.value))}
          />

          <input
            type="file"
            id="imageInput"
            hidden={true}
            onChange={(e) => setImage(e.target.files![0])}
          />
          <br />
          <IconButton onClick={handlerEditPicture}>
            アバター画像<MdAddAPhoto />
          </IconButton>
          <br />
          <Button
            disabled={!profile?.nickName}
            variant="contained"
            color="primary"
            type="submit"
            onClick={updateProfile}
          >
            更新
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default EditProfile;