import React from "react";

import {Button} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import styles from "./Top.module.css";
import { makeStyles } from "@material-ui/core/styles";

// import Image from "next/image";
import Image from '../public/mac.png';

import {
    setOpenSignIn,
    resetOpenSignIn,
    setOpenSignUp,
    resetOpenSignUp,
} from "../function/auth/authSlice";

const useStyles = makeStyles((theme) => ({
    login: {
        width: "150px",
        height: "40px",
        margin:"10px",
        color:"white",
        backgroundColor:"blue",
        "&:hover": {
            background: "#00FFFF",
            color:"#334F5A"
        },
    },
    signup: {
        width: "150px",
        height: "40px",
        margin:"10px",
        color:"white",
        backgroundColor:"orange",
        "&:hover": {
            background: "#FFFF00",
            color:"#334F5A"
        },
    },
}));

const Top: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.auth_box}>
                    <h1 className={styles.text}>ぶれない人生の築き方</h1>
                    <h1 className={styles.text}>明確なターゲットの設定で</h1>
                    <h1 className={styles.text}>最高の人生を創る</h1>
                    <p className={styles.text}>~ もう迷わない ~</p>
                    <div className={styles.button_box}>
                        <Button
                            className={classes.login}
                            onClick={() => {
                                dispatch(setOpenSignIn());
                                dispatch(resetOpenSignUp());
                            }}
                        >
                        ログイン
                        </Button>
                        <Button
                            className={classes.signup}
                            onClick={() => {
                                dispatch(setOpenSignUp());
                                dispatch(resetOpenSignIn());
                            }}
                        >
                        新規登録
                        </Button>
                    </div>
                </div>
                <div className={styles.image_box}>
                    <input type="image" src = {Image} alt="photo" className={styles.image}/>
                </div>
            </div>
        </div>
    );
};

export default Top;