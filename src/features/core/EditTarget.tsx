import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Core.module.css";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

import {
  editNickName,
  selectProfile,
  selectOpenProfile,
  resetOpenProfile,
  fetchCredStart,
  fetchCredEnd,
  fetchAsyncUpdateProf,
} from "../auth/authSlice";

import {
  selectTargets,
} from "../target/targetSlice";

import { Button, TextField } from "@material-ui/core";


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

const EditTarget: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const openProfile = useSelector(selectOpenProfile);
  const profile = useSelector(selectProfile);
  const [image, setImage] = useState<File | null>(null);

  const updateProfile = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const packet = {
      id: profile.id,
      nickName: profile.nickName, 
      img: image 
    };

    await dispatch(fetchCredStart());
    await dispatch(fetchAsyncUpdateProf(packet));
    await dispatch(fetchCredEnd());
    await dispatch(resetOpenProfile());
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
          <h1 className={styles.core_title}>Edit Target</h1>

          <br />
          {/* <TextField
            placeholder="task1_1"
            type="text"
            value={todo?.task1_1}
            inputProps={{style: {fontSize: '12px'} }} label="task1_1"  
            onChange={(e) => dispatch(editNickName(e.target.value))}
          /> */}

          <Button
            disabled={!profile?.nickName}
            variant="contained"
            color="primary"
            type="submit"
            onClick={updateProfile}
          >
            Update
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default EditTarget;