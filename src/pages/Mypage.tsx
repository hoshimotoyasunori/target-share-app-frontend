import React from "react";
import styles from "./Mypage.module.css"
import { AppDispatch } from "../app/store";
import { useSelector,useDispatch } from "react-redux";

import {Avatar, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from '../public/purasu.png';

import Mytarget from "../function/target/Mytarget";
import EditProfile from "../modal/EditProfile";
import NewTarget from "../modal/NewTarget";

import{
    selectProfile,
    setOpenProfile,
    resetOpenProfile,
} from "../function/auth/authSlice";

import {
    selectMyTarget,
    setOpenNewTarget,
    resetOpenNewTarget,
} from "../function/target/targetSlice";


const useStyles = makeStyles((theme) => ({
    icon: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        marginRight: theme.spacing(2),
    },
}));


const Mypage: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const profile = useSelector(selectProfile);
    const target = useSelector(selectMyTarget);
    // console.log(target)
    const classes = useStyles();
    return (
        <>
            <EditProfile />
            {/* <EditMyTarget /> */}
            <NewTarget />
            <div className={styles.mypage_container}>
                <div className={styles.profile} >
                    <Avatar 
                        className={classes.icon} 
                        alt="who?" 
                        src={profile.img} 
                    />

                    <div className={styles.profile_item}>
                        <h1 className={styles.nickname}>{profile?.nickName}</h1>
                        <div className={styles.button_box}>
                            <button
                                className={styles.profile_button}
                                onClick={() => {
                                    dispatch(setOpenProfile());
                                    dispatch(resetOpenNewTarget());
                                }}
                            >
                                <p>プロフィール編集</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className={styles.core_btnModal}
                    onClick={() => {
                        dispatch(setOpenNewTarget());
                        dispatch(resetOpenProfile());
                    }}
                >
                    <input type="image" src = {Image} alt="photo" className={styles.image}/>

                </button>


                <div className={styles.mytarget}>
                    <Grid container spacing={2}>
                        {target
                            .slice(0)
                            .reverse()
                            .map((tar) => (
                            <Grid key={tar.id} item xs={12} md={6}>
                                <Mytarget
                                    created_at={tar.created_at}
                                    id={tar.id}
                                    loginId={profile.userProfile}
                                    userTarget={tar.userTarget}
                                    main={tar.main}
                                    liked={tar.liked}
                                    sub1={tar.sub1}sub2={tar.sub2}sub3={tar.sub3}sub4={tar.sub4}sub6={tar.sub6}sub7={tar.sub7}sub8={tar.sub8}sub9={tar.sub9}
                                    todo1_1={tar.todo1_1}todo1_2={tar.todo1_2}todo1_3={tar.todo1_3}todo1_4={tar.todo1_4}todo1_6={tar.todo1_6}todo1_7={tar.todo1_7}todo1_8={tar.todo1_8}todo1_9={tar.todo1_9}
                                    todo2_1={tar.todo2_1}todo2_2={tar.todo2_2}todo2_3={tar.todo2_3}todo2_4={tar.todo2_4}todo2_6={tar.todo2_6}todo2_7={tar.todo2_7}todo2_8={tar.todo2_8}todo2_9={tar.todo2_9}
                                    todo3_1={tar.todo3_1}todo3_2={tar.todo3_2}todo3_3={tar.todo3_3}todo3_4={tar.todo3_4}todo3_6={tar.todo3_6}todo3_7={tar.todo3_7}todo3_8={tar.todo3_8}todo3_9={tar.todo3_9}
                                    todo4_1={tar.todo4_1}todo4_2={tar.todo4_2}todo4_3={tar.todo4_3}todo4_4={tar.todo4_4}todo4_6={tar.todo4_6}todo4_7={tar.todo4_7}todo4_8={tar.todo4_8}todo4_9={tar.todo4_9}
                                    todo6_1={tar.todo6_1}todo6_2={tar.todo6_2}todo6_3={tar.todo6_3}todo6_4={tar.todo6_4}todo6_6={tar.todo6_6}todo6_7={tar.todo6_7}todo6_8={tar.todo6_8}todo6_9={tar.todo6_9}
                                    todo7_1={tar.todo7_1}todo7_2={tar.todo7_2}todo7_3={tar.todo7_3}todo7_4={tar.todo7_4}todo7_6={tar.todo7_6}todo7_7={tar.todo7_7}todo7_8={tar.todo7_8}todo7_9={tar.todo7_9}
                                    todo8_1={tar.todo8_1}todo8_2={tar.todo8_2}todo8_3={tar.todo8_3}todo8_4={tar.todo8_4}todo8_6={tar.todo8_6}todo8_7={tar.todo8_7}todo8_8={tar.todo8_8}todo8_9={tar.todo8_9}
                                    todo9_1={tar.todo9_1}todo9_2={tar.todo9_2}todo9_3={tar.todo9_3}todo9_4={tar.todo9_4}todo9_6={tar.todo9_6}todo9_7={tar.todo9_7}todo9_8={tar.todo9_8}todo9_9={tar.todo9_9}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </> 
    );
};

export default Mypage;