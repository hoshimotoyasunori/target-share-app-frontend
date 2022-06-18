import React from "react";

import styles from "./Top.module.css";

import Image from '../public/mac.png';
import Data from '../sampleTarget.json'

// import {Grid} from "@material-ui/core";



const Top: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.auth_box}>
                    <h1 className={styles.text}>ぶれない人生の築き方</h1>
                    <h1 className={styles.text}>明確なターゲットの設定で</h1>
                    <h1 className={styles.text}>最高の人生を創る</h1>
                    <p className={styles.text}>~ もう迷わない ~</p>
                </div>
                <div className={styles.image_box}>
                    <input type="image" src = {Image} alt="photo" className={styles.image}/>
                </div>
            </div>
            <div className={styles.wrap} >
            {/* <div className={`${styles.wrap} ${styles.paused}`} > */}
                <ul className={styles.target}>
                    {Data
                        .slice(0)
                        // .reverse()
                        .map((data) => (
                            <li key={data.id} className={`${styles.target_container} ${styles.content_hover}`} >
                                <div className={styles.target_box}>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo1_1}</p>
                                            <p className={styles.atom}>{data.todo1_2}</p>
                                            <p className={styles.atom}>{data.todo1_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo1_4}</p>
                                            <p className={`${styles.atom} ${styles.color1}`}>{data.sub1}</p>
                                            <p className={styles.atom}>{data.todo1_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo1_7}</p>
                                            <p className={styles.atom}>{data.todo1_8}</p>
                                            <p className={styles.atom}>{data.todo1_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo2_1}</p>
                                            <p className={styles.atom}>{data.todo2_2}</p>
                                            <p className={styles.atom}>{data.todo2_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo2_4}</p>
                                            <p className={`${styles.atom} ${styles.color2}`}>{data.sub2}</p>
                                            <p className={styles.atom}>{data.todo2_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo2_7}</p>
                                            <p className={styles.atom}>{data.todo2_8}</p>
                                            <p className={styles.atom}>{data.todo2_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo3_1}</p>
                                            <p className={styles.atom}>{data.todo3_2}</p>
                                            <p className={styles.atom}>{data.todo3_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo3_4}</p>
                                            <p className={`${styles.atom} ${styles.color3}`}>{data.sub3}</p>
                                            <p className={styles.atom}>{data.todo3_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo3_7}</p>
                                            <p className={styles.atom}>{data.todo3_8}</p>
                                            <p className={styles.atom}>{data.todo3_9}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.target_box}>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo4_1}</p>
                                            <p className={styles.atom}>{data.todo4_2}</p>
                                            <p className={styles.atom}>{data.todo4_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo4_4}</p>
                                            <p className={`${styles.atom} ${styles.color4}`}>{data.sub4}</p>
                                            <p className={styles.atom}>{data.todo4_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo4_7}</p>
                                            <p className={styles.atom}>{data.todo4_8}</p>
                                            <p className={styles.atom}>{data.todo4_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={`${styles.atom} ${styles.color1}`}>{data.sub1}</p>
                                            <p className={`${styles.atom} ${styles.color2}`}>{data.sub2}</p>
                                            <p className={`${styles.atom} ${styles.color3}`}>{data.sub3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={`${styles.atom} ${styles.color4}`}>{data.sub4}</p>
                                            <p className={`${styles.atom} ${styles.color5}`}>{data.main}</p>
                                            <p className={`${styles.atom} ${styles.color6}`}>{data.sub6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={`${styles.atom} ${styles.color7}`}>{data.sub7}</p>
                                            <p className={`${styles.atom} ${styles.color8}`}>{data.sub8}</p>
                                            <p className={`${styles.atom} ${styles.color9}`}>{data.sub9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo6_1}</p>
                                            <p className={styles.atom}>{data.todo6_2}</p>
                                            <p className={styles.atom}>{data.todo6_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo6_4}</p>
                                            <p className={`${styles.atom} ${styles.color6}`}>{data.sub6}</p>
                                            <p className={styles.atom}>{data.todo6_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo6_7}</p>
                                            <p className={styles.atom}>{data.todo6_8}</p>
                                            <p className={styles.atom}>{data.todo6_9}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.target_box}>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo7_1}</p>
                                            <p className={styles.atom}>{data.todo7_2}</p>
                                            <p className={styles.atom}>{data.todo7_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo7_4}</p>
                                            <p className={`${styles.atom} ${styles.color7}`}>{data.sub7}</p>
                                            <p className={styles.atom}>{data.todo7_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo7_7}</p>
                                            <p className={styles.atom}>{data.todo7_8}</p>
                                            <p className={styles.atom}>{data.todo7_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo8_1}</p>
                                            <p className={styles.atom}>{data.todo8_2}</p>
                                            <p className={styles.atom}>{data.todo8_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo8_4}</p>
                                            <p className={`${styles.atom} ${styles.color8}`}>{data.sub8}</p>
                                            <p className={styles.atom}>{data.todo8_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo8_7}</p>
                                            <p className={styles.atom}>{data.todo8_8}</p>
                                            <p className={styles.atom}>{data.todo8_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo9_1}</p>
                                            <p className={styles.atom}>{data.todo9_2}</p>
                                            <p className={styles.atom}>{data.todo9_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo9_4}</p>
                                            <p className={`${styles.atom} ${styles.color9}`}>{data.sub9}</p>
                                            <p className={styles.atom}>{data.todo9_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo9_7}</p>
                                            <p className={styles.atom}>{data.todo9_8}</p>
                                            <p className={styles.atom}>{data.todo9_9}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ul className={styles.target}>
                    {Data
                        .slice(0)
                        // .reverse()
                        .map((data) => (
                            <li key={data.id} className={`${styles.target_container} ${styles.content_hover}`}>
                                <div className={styles.target_box}>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo1_1}</p>
                                            <p className={styles.atom}>{data.todo1_2}</p>
                                            <p className={styles.atom}>{data.todo1_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo1_4}</p>
                                            <p className={`${styles.atom} ${styles.color1}`}>{data.sub1}</p>
                                            <p className={styles.atom}>{data.todo1_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo1_7}</p>
                                            <p className={styles.atom}>{data.todo1_8}</p>
                                            <p className={styles.atom}>{data.todo1_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo2_1}</p>
                                            <p className={styles.atom}>{data.todo2_2}</p>
                                            <p className={styles.atom}>{data.todo2_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo2_4}</p>
                                            <p className={`${styles.atom} ${styles.color2}`}>{data.sub2}</p>
                                            <p className={styles.atom}>{data.todo2_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo2_7}</p>
                                            <p className={styles.atom}>{data.todo2_8}</p>
                                            <p className={styles.atom}>{data.todo2_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo3_1}</p>
                                            <p className={styles.atom}>{data.todo3_2}</p>
                                            <p className={styles.atom}>{data.todo3_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo3_4}</p>
                                            <p className={`${styles.atom} ${styles.color3}`}>{data.sub3}</p>
                                            <p className={styles.atom}>{data.todo3_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo3_7}</p>
                                            <p className={styles.atom}>{data.todo3_8}</p>
                                            <p className={styles.atom}>{data.todo3_9}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.target_box}>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo4_1}</p>
                                            <p className={styles.atom}>{data.todo4_2}</p>
                                            <p className={styles.atom}>{data.todo4_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo4_4}</p>
                                            <p className={`${styles.atom} ${styles.color4}`}>{data.sub4}</p>
                                            <p className={styles.atom}>{data.todo4_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo4_7}</p>
                                            <p className={styles.atom}>{data.todo4_8}</p>
                                            <p className={styles.atom}>{data.todo4_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={`${styles.atom} ${styles.color1}`}>{data.sub1}</p>
                                            <p className={`${styles.atom} ${styles.color2}`}>{data.sub2}</p>
                                            <p className={`${styles.atom} ${styles.color3}`}>{data.sub3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={`${styles.atom} ${styles.color4}`}>{data.sub4}</p>
                                            <p className={`${styles.atom} ${styles.color5}`}>{data.main}</p>
                                            <p className={`${styles.atom} ${styles.color6}`}>{data.sub6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={`${styles.atom} ${styles.color7}`}>{data.sub7}</p>
                                            <p className={`${styles.atom} ${styles.color8}`}>{data.sub8}</p>
                                            <p className={`${styles.atom} ${styles.color9}`}>{data.sub9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo6_1}</p>
                                            <p className={styles.atom}>{data.todo6_2}</p>
                                            <p className={styles.atom}>{data.todo6_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo6_4}</p>
                                            <p className={`${styles.atom} ${styles.color6}`}>{data.sub6}</p>
                                            <p className={styles.atom}>{data.todo6_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo6_7}</p>
                                            <p className={styles.atom}>{data.todo6_8}</p>
                                            <p className={styles.atom}>{data.todo6_9}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.target_box}>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo7_1}</p>
                                            <p className={styles.atom}>{data.todo7_2}</p>
                                            <p className={styles.atom}>{data.todo7_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo7_4}</p>
                                            <p className={`${styles.atom} ${styles.color7}`}>{data.sub7}</p>
                                            <p className={styles.atom}>{data.todo7_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo7_7}</p>
                                            <p className={styles.atom}>{data.todo7_8}</p>
                                            <p className={styles.atom}>{data.todo7_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo8_1}</p>
                                            <p className={styles.atom}>{data.todo8_2}</p>
                                            <p className={styles.atom}>{data.todo8_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo8_4}</p>
                                            <p className={`${styles.atom} ${styles.color8}`}>{data.sub8}</p>
                                            <p className={styles.atom}>{data.todo8_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo8_7}</p>
                                            <p className={styles.atom}>{data.todo8_8}</p>
                                            <p className={styles.atom}>{data.todo8_9}</p>
                                        </div>
                                    </div>
                                    <div className={styles.card}>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo9_1}</p>
                                            <p className={styles.atom}>{data.todo9_2}</p>
                                            <p className={styles.atom}>{data.todo9_3}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo9_4}</p>
                                            <p className={`${styles.atom} ${styles.color9}`}>{data.sub9}</p>
                                            <p className={styles.atom}>{data.todo9_6}</p>
                                        </div>
                                        <div className={styles.itembox}>
                                            <p className={styles.atom}>{data.todo9_7}</p>
                                            <p className={styles.atom}>{data.todo9_8}</p>
                                            <p className={styles.atom}>{data.todo9_9}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Top;