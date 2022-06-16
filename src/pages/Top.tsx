import React from "react";

import styles from "./Top.module.css";

import Image from '../public/mac.png';

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
        </div>
    );
};

export default Top;