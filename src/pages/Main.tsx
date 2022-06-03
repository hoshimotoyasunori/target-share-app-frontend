import React from "react";
import styles from "../features/core/Core.module.css"
import { useSelector } from "react-redux";

import {Grid} from "@material-ui/core";

import {selectProfile} from "../features/auth/authSlice";
import {selectTargets} from "../features/target/targetSlice";

import Target from "../features/target/Target";


const Main: React.FC = () => {
    const profile = useSelector(selectProfile);
    const targets = useSelector(selectTargets);

    return (
        <div className={styles.core_posts}>
            <Grid container spacing={4}>
                {targets
                    .slice(0)
                    .reverse()
                    .map((target) => (
                    <Grid key={target.id} item xs={12} md={4}>
                        <Target
                            targetId={target.id}
                            loginId={profile.userProfile}
                            userTarget={target.userTarget}
                            main={target.main}
                            liked={target.liked}
                            created_at={target.created_at}
                            sub1={target.sub1}
                            sub2={target.sub2}
                            sub3={target.sub3}
                            sub4={target.sub4}
                            sub6={target.sub6}
                            sub7={target.sub7}
                            sub8={target.sub8}
                            sub9={target.sub9}
                            todo1_1={target.todo1_1}
                            todo1_2={target.todo1_2}
                            todo1_3={target.todo1_3}
                            todo1_4={target.todo1_4}
                            todo1_6={target.todo1_6}
                            todo1_7={target.todo1_7}
                            todo1_8={target.todo1_8}
                            todo1_9={target.todo1_9}
                            todo2_1={target.todo2_1}
                            todo2_2={target.todo2_2}
                            todo2_3={target.todo2_3}
                            todo2_4={target.todo2_4}
                            todo2_6={target.todo2_6}
                            todo2_7={target.todo2_7}
                            todo2_8={target.todo2_8}
                            todo2_9={target.todo2_9}
                            todo3_1={target.todo3_1}
                            todo3_2={target.todo3_2}
                            todo3_3={target.todo3_3}
                            todo3_4={target.todo3_4}
                            todo3_6={target.todo3_6}
                            todo3_7={target.todo3_7}
                            todo3_8={target.todo3_8}
                            todo3_9={target.todo3_9}
                            todo4_1={target.todo4_1}
                            todo4_2={target.todo4_2}
                            todo4_3={target.todo4_3}
                            todo4_4={target.todo4_4}
                            todo4_6={target.todo4_6}
                            todo4_7={target.todo4_7}
                            todo4_8={target.todo4_8}
                            todo4_9={target.todo4_9}
                            todo6_1={target.todo6_1}
                            todo6_2={target.todo6_2}
                            todo6_3={target.todo6_3}
                            todo6_4={target.todo6_4}
                            todo6_6={target.todo6_6}
                            todo6_7={target.todo6_7}
                            todo6_8={target.todo6_8}
                            todo6_9={target.todo6_9}
                            todo7_1={target.todo7_1}
                            todo7_2={target.todo7_2}
                            todo7_3={target.todo7_3}
                            todo7_4={target.todo7_4}
                            todo7_6={target.todo7_6}
                            todo7_7={target.todo7_7}
                            todo7_8={target.todo7_8}
                            todo7_9={target.todo7_9}
                            todo8_1={target.todo8_1}
                            todo8_2={target.todo8_2}
                            todo8_3={target.todo8_3}
                            todo8_4={target.todo8_4}
                            todo8_6={target.todo8_6}
                            todo8_7={target.todo8_7}
                            todo8_8={target.todo8_8}
                            todo8_9={target.todo8_9}
                            todo9_1={target.todo9_1}
                            todo9_2={target.todo9_2}
                            todo9_3={target.todo9_3}
                            todo9_4={target.todo9_4}
                            todo9_6={target.todo9_6}
                            todo9_7={target.todo9_7}
                            todo9_8={target.todo9_8}
                            todo9_9={target.todo9_9}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Main;