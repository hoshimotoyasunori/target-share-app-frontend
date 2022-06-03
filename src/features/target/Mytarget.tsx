import React from "react";
import styles from "./Target.module.css";


import { Avatar } from "@material-ui/core";

import { useSelector } from "react-redux";
import { selectProfile } from "../auth/authSlice";

import { PROPS_TARGET } from "../types";

const Mytarget: React.FC<PROPS_TARGET> = ({
    targetId,
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
  const profile = useSelector(selectProfile);


  if (main) {
    return (
      <div className={styles.post}>
        <div className={styles.post_header}>
          <Avatar className={styles.post_avatar} src={profile?.img} />
          <h3>{main}</h3><p>　"{created_at}"　</p>
        </div>
        <div className={styles.container} >
          <div className={styles.box}>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo1_1}</p>
                <p className={styles.atom}>{todo1_2}</p>
                <p className={styles.atom}>{todo1_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo1_4}</p>
                <p className={styles.atom}>{sub1}</p>
                <p className={styles.atom}>{todo1_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo1_7}</p>
                <p className={styles.atom}>{todo1_8}</p>
                <p className={styles.atom}>{todo1_9}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo2_1}</p>
                <p className={styles.atom}>{todo2_2}</p>
                <p className={styles.atom}>{todo2_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo2_4}</p>
                <p className={styles.atom}>{sub2}</p>
                <p className={styles.atom}>{todo2_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo2_7}</p>
                <p className={styles.atom}>{todo2_8}</p>
                <p className={styles.atom}>{todo2_9}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo3_1}</p>
                <p className={styles.atom}>{todo3_2}</p>
                <p className={styles.atom}>{todo3_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo3_4}</p>
                <p className={styles.atom}>{sub3}</p>
                <p className={styles.atom}>{todo3_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo3_7}</p>
                <p className={styles.atom}>{todo3_8}</p>
                <p className={styles.atom}>{todo3_9}</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo4_1}</p>
                <p className={styles.atom}>{todo4_2}</p>
                <p className={styles.atom}>{todo4_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo4_4}</p>
                <p className={styles.atom}>{sub4}</p>
                <p className={styles.atom}>{todo4_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo4_7}</p>
                <p className={styles.atom}>{todo4_8}</p>
                <p className={styles.atom}>{todo4_9}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{sub1}</p>
                <p className={styles.atom}>{sub2}</p>
                <p className={styles.atom}>{sub3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{sub4}</p>
                <p className={styles.atom}>{main}</p>
                <p className={styles.atom}>{sub6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{sub7}</p>
                <p className={styles.atom}>{sub8}</p>
                <p className={styles.atom}>{sub9}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo6_1}</p>
                <p className={styles.atom}>{todo6_2}</p>
                <p className={styles.atom}>{todo6_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo6_4}</p>
                <p className={styles.atom}>{sub6}</p>
                <p className={styles.atom}>{todo6_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo6_7}</p>
                <p className={styles.atom}>{todo6_8}</p>
                <p className={styles.atom}>{todo6_9}</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo7_1}</p>
                <p className={styles.atom}>{todo7_2}</p>
                <p className={styles.atom}>{todo7_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo7_4}</p>
                <p className={styles.atom}>{sub7}</p>
                <p className={styles.atom}>{todo7_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo7_7}</p>
                <p className={styles.atom}>{todo7_8}</p>
                <p className={styles.atom}>{todo7_9}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo8_1}</p>
                <p className={styles.atom}>{todo8_2}</p>
                <p className={styles.atom}>{todo8_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo8_4}</p>
                <p className={styles.atom}>{sub8}</p>
                <p className={styles.atom}>{todo8_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo8_7}</p>
                <p className={styles.atom}>{todo8_8}</p>
                <p className={styles.atom}>{todo8_9}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo9_1}</p>
                <p className={styles.atom}>{todo9_2}</p>
                <p className={styles.atom}>{todo9_3}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo9_4}</p>
                <p className={styles.atom}>{sub9}</p>
                <p className={styles.atom}>{todo9_6}</p>
              </div>
              <div className={styles.itembox}>
                <p className={styles.atom}>{todo9_7}</p>
                <p className={styles.atom}>{todo9_8}</p>
                <p className={styles.atom}>{todo9_9}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Mytarget;
