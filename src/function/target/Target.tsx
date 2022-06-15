import React, { useState } from "react";
import styles from "./Target.module.css";

import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Divider, Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

import { selectProfiles } from "../auth/authSlice";

import {
  // useSelect
  selectComments,
  //非同期
  fetchTargetStart,
  fetchTargetEnd,
  fetchAsyncUserComment,
  fetchAsyncPatchLiked,
} from "./targetSlice";

import { PROPS_TARGET } from "../types";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: theme.spacing(1),
  },
}));

const Target: React.FC<PROPS_TARGET> = ({
    id,
    loginId,
    userTarget,
    main,
    liked,
    created_at,
    sub1,sub2,sub3,sub4,sub6,sub7,sub8,sub9,
    todo1_1,todo1_2,todo1_3,todo1_4,todo1_6,todo1_7,todo1_8,todo1_9,
    todo2_1,todo2_2,todo2_3,todo2_4,todo2_6,todo2_7,todo2_8,todo2_9,
    todo3_1,todo3_2,todo3_3,todo3_4,todo3_6,todo3_7,todo3_8,todo3_9,
    todo4_1,todo4_2,todo4_3,todo4_4,todo4_6,todo4_7,todo4_8,todo4_9,
    todo6_1,todo6_2,todo6_3,todo6_4,todo6_6,todo6_7,todo6_8,todo6_9,
    todo7_1,todo7_2,todo7_3,todo7_4,todo7_6,todo7_7,todo7_8,todo7_9,
    todo8_1,todo8_2,todo8_3,todo8_4,todo8_6,todo8_7,todo8_8,todo8_9,
    todo9_1,todo9_2,todo9_3,todo9_4,todo9_6,todo9_7,todo9_8,todo9_9,
}) => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const profiles = useSelector(selectProfiles);
  const comments = useSelector(selectComments);
  const [text, setText] = useState("");
  const commentsOnUser = comments.filter((com) => {
    return com.target === id;
  });
  const prof = profiles.filter((prof) => {
    return prof.userProfile === userTarget;
  });

  // console.log("prof情報")
  // console.log(prof)
  // console.log("-------")
  const postComment = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const packet = { text: text, target: id };
    await dispatch(fetchTargetStart());
    await dispatch(fetchAsyncUserComment(packet));
    await dispatch(fetchTargetEnd());
    setText("");
  };

  const handlerLiked = async () => {
    const packet = {
      id: id,
      main: main,
      current: liked,
      new: loginId,
    };
    await dispatch(fetchTargetStart());
    await dispatch(fetchAsyncPatchLiked(packet));
    await dispatch(fetchTargetEnd());
  };

  if (main) {
    return (
      <div className={styles.post}>
        <div className={styles.post_header}>
          <Avatar className={styles.post_avatar} src={prof[0]?.img} />
          <h3>{prof[0]?.nickName}</h3>
        </div>

        <div className={styles.container} >
          <div className={styles.card}>
            <div className={styles.itembox}>
              <p className={`${styles.atom} ${styles.box1}`}>{sub1}</p>
              <p className={`${styles.atom} ${styles.box2}`}>{sub2}</p>
              <p className={`${styles.atom} ${styles.box3}`}>{sub3}</p>
            </div>
            <div className={styles.itembox}>
              <p className={`${styles.atom} ${styles.box4}`}>{sub4}</p>
              <p className={`${styles.atom} ${styles.box5}`}>{main}</p>
              <p className={`${styles.atom} ${styles.box6}`}>{sub6}</p>
            </div>
            <div className={styles.itembox}>
              <p className={`${styles.atom} ${styles.box7}`}>{sub7}</p>
              <p className={`${styles.atom} ${styles.box8}`}>{sub8}</p>
              <p className={`${styles.atom} ${styles.box9}`}>{sub9}</p>
            </div>
          </div>
        </div>
        <h4 className={styles.post_text}>
          <Checkbox
            className={styles.post_checkBox}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={liked.some((like) => like === loginId)}
            onChange={handlerLiked}
          />
          <strong>いいね</strong>
          {/* <strong> {prof[0]?.nickName}</strong> */}
          <AvatarGroup max={7}>
            {liked.map((like) => (
              <Avatar
                className={styles.post_avatarGroup}
                key={like}
                src={profiles.find((prof) => prof.userProfile === like)?.img}
              />
            ))}
          </AvatarGroup>
        </h4>

        <Divider />
        <form className={styles.post_commentBox}>
          <input
            className={styles.post_input}
            type="text"
            placeholder="add a comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            disabled={!text.length}
            className={styles.post_button}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
        <div className={styles.post_comments}>
          {commentsOnUser.map((comment) => (
            <div key={comment.id} className={styles.post_comment}>
              <Avatar
                src={
                  profiles.find(
                    (prof) => prof.userProfile === comment.userComment
                  )?.img
                }
                className={classes.small}
              />
              <p>
                <strong className={styles.post_strong}>
                  {
                    profiles.find(
                      (prof) => prof.userProfile === comment.userComment
                    )?.nickName
                  }
                </strong>
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default Target;
