import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";


import styles from "./Core.module.css"


import {
    selectOpenNewTarget,
    resetOpenNewTarget,
    fetchTargetStart,
    fetchTargetEnd,
    fetchAsyncNewTarget,
} from "../target/targetSlice";


import { Button, TextField } from "@material-ui/core";

const customStyles = {
  content: {
    top: "57%",
    left: "50%",

    width: "90%",
    height: "80%",
    padding: "10px",

    transform: "translate(-50%, -50%)",
  },
};
// type Props = {
//     visible: boolean;
//   };

const NewTarget: React.FC = () => {

    // const [visible, setVisible] = useState(true);
    const dispatch: AppDispatch = useDispatch();
    const openNewTarget = useSelector(selectOpenNewTarget);

    const [main, setMain] = useState("");
    const [sub1, setSub1] = useState("");
    const [sub2, setSub2] = useState("");
    const [sub3, setSub3] = useState("");
    const [sub4, setSub4] = useState("");
    const [sub6, setSub6] = useState("");
    const [sub7, setSub7] = useState("");
    const [sub8, setSub8] = useState("");
    const [sub9, setSub9] = useState("");
    const [todo1_1, setTodo1_1] = useState("");
    const [todo1_2, setTodo1_2] = useState("");
    const [todo1_3, setTodo1_3] = useState("");
    const [todo1_4, setTodo1_4] = useState("");
    const [todo1_6, setTodo1_6] = useState("");
    const [todo1_7, setTodo1_7] = useState("");
    const [todo1_8, setTodo1_8] = useState("");
    const [todo1_9, setTodo1_9] = useState("");
    const [todo2_1, setTodo2_1] = useState("");
    const [todo2_2, setTodo2_2] = useState("");
    const [todo2_3, setTodo2_3] = useState("");
    const [todo2_4, setTodo2_4] = useState("");
    const [todo2_6, setTodo2_6] = useState("");
    const [todo2_7, setTodo2_7] = useState("");
    const [todo2_8, setTodo2_8] = useState("");
    const [todo2_9, setTodo2_9] = useState("");
    const [todo3_1, setTodo3_1] = useState("");
    const [todo3_2, setTodo3_2] = useState("");
    const [todo3_3, setTodo3_3] = useState("");
    const [todo3_4, setTodo3_4] = useState("");
    const [todo3_6, setTodo3_6] = useState("");
    const [todo3_7, setTodo3_7] = useState("");
    const [todo3_8, setTodo3_8] = useState("");
    const [todo3_9, setTodo3_9] = useState("");
    const [todo4_1, setTodo4_1] = useState("");
    const [todo4_2, setTodo4_2] = useState("");
    const [todo4_3, setTodo4_3] = useState("");
    const [todo4_4, setTodo4_4] = useState("");
    const [todo4_6, setTodo4_6] = useState("");
    const [todo4_7, setTodo4_7] = useState("");
    const [todo4_8, setTodo4_8] = useState("");
    const [todo4_9, setTodo4_9] = useState("");
    const [todo6_1, setTodo6_1] = useState("");
    const [todo6_2, setTodo6_2] = useState("");
    const [todo6_3, setTodo6_3] = useState("");
    const [todo6_4, setTodo6_4] = useState("");
    const [todo6_6, setTodo6_6] = useState("");
    const [todo6_7, setTodo6_7] = useState("");
    const [todo6_8, setTodo6_8] = useState("");
    const [todo6_9, setTodo6_9] = useState("");
    const [todo7_1, setTodo7_1] = useState("");
    const [todo7_2, setTodo7_2] = useState("");
    const [todo7_3, setTodo7_3] = useState("");
    const [todo7_4, setTodo7_4] = useState("");
    const [todo7_6, setTodo7_6] = useState("");
    const [todo7_7, setTodo7_7] = useState("");
    const [todo7_8, setTodo7_8] = useState("");
    const [todo7_9, setTodo7_9] = useState("");
    const [todo8_1, setTodo8_1] = useState("");
    const [todo8_2, setTodo8_2] = useState("");
    const [todo8_3, setTodo8_3] = useState("");
    const [todo8_4, setTodo8_4] = useState("");
    const [todo8_6, setTodo8_6] = useState("");
    const [todo8_7, setTodo8_7] = useState("");
    const [todo8_8, setTodo8_8] = useState("");
    const [todo8_9, setTodo8_9] = useState("");
    const [todo9_1, setTodo9_1] = useState("");
    const [todo9_2, setTodo9_2] = useState("");
    const [todo9_3, setTodo9_3] = useState("");
    const [todo9_4, setTodo9_4] = useState("");
    const [todo9_6, setTodo9_6] = useState("");
    const [todo9_7, setTodo9_7] = useState("");
    const [todo9_8, setTodo9_8] = useState("");
    const [todo9_9, setTodo9_9] = useState("");
    const newTarget = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const packet = {
            main: main,
            sub1: sub1,
            sub2: sub2,
            sub3: sub3,
            sub4: sub4,
            sub6: sub6,
            sub7: sub7,
            sub8: sub8,
            sub9: sub9,
            todo1_1: todo1_1,
            todo1_2: todo1_2,
            todo1_3: todo1_3,
            todo1_4: todo1_4,
            todo1_6: todo1_6,
            todo1_7: todo1_7,
            todo1_8: todo1_8,
            todo1_9: todo1_9,
            todo2_1: todo2_1,
            todo2_2: todo2_2,
            todo2_3: todo2_3,
            todo2_4: todo2_4,
            todo2_6: todo2_6,
            todo2_7: todo2_7,
            todo2_8: todo2_8,
            todo2_9: todo2_9,
            todo3_1: todo3_1,
            todo3_2: todo3_2,
            todo3_3: todo3_3,
            todo3_4: todo3_4,
            todo3_6: todo3_6,
            todo3_7: todo3_7,
            todo3_8: todo3_8,
            todo3_9: todo3_9,
            todo4_1: todo4_1,
            todo4_2: todo4_2,
            todo4_3: todo4_3,
            todo4_4: todo4_4,
            todo4_6: todo4_6,
            todo4_7: todo4_7,
            todo4_8: todo4_8,
            todo4_9: todo4_9,
            todo6_1: todo6_1,
            todo6_2: todo6_2,
            todo6_3: todo6_3,
            todo6_4: todo6_4,
            todo6_6: todo6_6,
            todo6_7: todo6_7,
            todo6_8: todo6_8,
            todo6_9: todo6_9,
            todo7_1: todo7_1,
            todo7_2: todo7_2,
            todo7_3: todo7_3,
            todo7_4: todo7_4,
            todo7_6: todo7_6,
            todo7_7: todo7_7,
            todo7_8: todo7_8,
            todo7_9: todo7_9,
            todo8_1: todo8_1,
            todo8_2: todo8_2,
            todo8_3: todo8_3,
            todo8_4: todo8_4,
            todo8_6: todo8_6,
            todo8_7: todo8_7,
            todo8_8: todo8_8,
            todo8_9: todo8_9,
            todo9_1: todo9_1,
            todo9_2: todo9_2,
            todo9_3: todo9_3,
            todo9_4: todo9_4,
            todo9_6: todo9_6,
            todo9_7: todo9_7,
            todo9_8: todo9_8,
            todo9_9: todo9_9,
        };
        await dispatch(fetchTargetStart());
        await dispatch(fetchAsyncNewTarget(packet));
        await dispatch(fetchTargetEnd());
        setMain("");
        setSub1("");
        setSub2("");
        setSub3("");
        setSub4("");
        setSub6("");
        setSub7("");
        setSub8("");
        setSub9("");
        setTodo1_1("");
        setTodo1_2("");
        setTodo1_3("");
        setTodo1_4("");
        setTodo1_6("");
        setTodo1_7("");
        setTodo1_8("");
        setTodo1_9("");
        setTodo2_1("");
        setTodo2_2("");
        setTodo2_3("");
        setTodo2_4("");
        setTodo2_6("");
        setTodo2_7("");
        setTodo2_8("");
        setTodo2_9("");
        setTodo3_1("");
        setTodo3_2("");
        setTodo3_3("");
        setTodo3_4("");
        setTodo3_6("");
        setTodo3_7("");
        setTodo3_8("");
        setTodo3_9("");
        setTodo4_1("");
        setTodo4_2("");
        setTodo4_3("");
        setTodo4_4("");
        setTodo4_6("");
        setTodo4_7("");
        setTodo4_8("");
        setTodo4_9("");
        setTodo6_1("");
        setTodo6_2("");
        setTodo6_3("");
        setTodo6_4("");
        setTodo6_6("");
        setTodo6_7("");
        setTodo6_8("");
        setTodo6_9("");
        setTodo7_1("");
        setTodo7_2("");
        setTodo7_3("");
        setTodo7_4("");
        setTodo7_6("");
        setTodo7_7("");
        setTodo7_8("");
        setTodo7_9("");
        setTodo8_1("");
        setTodo8_2("");
        setTodo8_3("");
        setTodo8_4("");
        setTodo8_6("");
        setTodo8_7("");
        setTodo8_8("");
        setTodo8_9("");
        setTodo9_1("");
        setTodo9_2("");
        setTodo9_3("");
        setTodo9_4("");
        setTodo9_6("");
        setTodo9_7("");
        setTodo9_8("");
        setTodo9_9("");
        dispatch(resetOpenNewTarget());
    };
    const [showResults, setShowResults] = React.useState(false)
    const openDetail = () => setShowResults(true)

    return (
        <>
            <Modal
                isOpen={openNewTarget}
                onRequestClose={async () => {
                await dispatch(resetOpenNewTarget());
                }}
                style={customStyles}
            >
                <form className={styles.core_signUp}>
                    <h1 className={styles.core_title}>Setting Target</h1>
                    <br />
                    <div className={styles.target_container}>
                        { showResults ? 
                        <div className={styles.target_box}>
                            <div className={styles.post_container }>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_1"
                                        type="text"
                                        onChange={(e) => setTodo1_1(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                        // label="1_1"  
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_2"
                                        type="text"
                                        onChange={(e) => setTodo1_2(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_3"
                                        type="text"
                                        onChange={(e) => setTodo1_3(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_4"
                                        type="text"
                                        onChange={(e) => setTodo1_4(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box1}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder={sub1}
                                        type="text"
                                        inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                        disabled
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_6"
                                        type="text"
                                        onChange={(e) => setTodo1_6(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_7"
                                        type="text"
                                        onChange={(e) => setTodo1_7(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 

                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_8"
                                        type="text"
                                        onChange={(e) => setTodo1_8(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="1_9"
                                        type="text"
                                        onChange={(e) => setTodo1_9(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                            {/* </div> */}
                            </div>
                            <div className={styles.post_container}>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_1"
                                        type="text"
                                        onChange={(e) => setTodo2_1(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_2"
                                        type="text"
                                        onChange={(e) => setTodo2_2(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_3"
                                        type="text"
                                        onChange={(e) => setTodo2_3(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_4"
                                        type="text"
                                        onChange={(e) => setTodo2_4(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 

                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box2}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder={sub2}
                                        type="text"
                                        inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                        disabled
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_6"
                                        type="text"
                                        onChange={(e) => setTodo2_6(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_7"
                                        type="text"
                                        onChange={(e) => setTodo2_7(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_8"
                                        type="text"
                                        onChange={(e) => setTodo2_8(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="2_9"
                                        type="text"
                                        onChange={(e) => setTodo2_9(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                            </div>
                            <div className={styles.post_container}>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_1"
                                        type="text"
                                        onChange={(e) => setTodo3_1(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_2"
                                        type="text"
                                        onChange={(e) => setTodo3_2(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_3"
                                        type="text"
                                        onChange={(e) => setTodo3_3(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_4"
                                        type="text"
                                        onChange={(e) => setTodo3_4(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box3}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder={sub3}
                                        type="text"
                                        inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                        disabled
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_6"
                                        type="text"
                                        onChange={(e) => setTodo3_6(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_7"
                                        type="text"
                                        onChange={(e) => setTodo3_7(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_8"
                                        type="text"
                                        onChange={(e) => setTodo3_8(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="3_9"
                                        type="text"
                                        onChange={(e) => setTodo3_9(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                            </div>
                        </div>
                        :null }
                        <div className={styles.target_box}>
                            { showResults ? 
                                <div className={styles.post_container}>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_1"
                                            type="text"
                                            onChange={(e) => setTodo4_1(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_2"
                                            type="text"
                                            onChange={(e) => setTodo4_2(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_3"
                                            type="text"
                                            onChange={(e) => setTodo4_3(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_4"
                                            type="text"
                                            onChange={(e) => setTodo4_4(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={`${styles.post_item} ${styles.box4}`}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            placeholder={sub4}
                                            type="text"
                                            inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                            disabled
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_6"
                                            type="text"
                                            onChange={(e) => setTodo4_6(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_7"
                                            type="text"
                                            onChange={(e) => setTodo4_7(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_8"
                                            type="text"
                                            onChange={(e) => setTodo4_8(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="4_9"
                                            type="text"
                                            onChange={(e) => setTodo4_9(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                </div>
                            :
                            null }
                            {/* main */}
                            <div className={styles.post_container}>
                                <div className={`${styles.post_item} ${styles.box1}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標１"
                                        type="text"
                                        onChange={(e) => setSub1(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box2}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標2"
                                        type="text"
                                        onChange={(e) => setSub2(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box3}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標3"
                                        type="text"
                                        onChange={(e) => setSub3(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box4}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標4"
                                        type="text"
                                        onChange={(e) => setSub4(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box5}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目的"
                                        type="text"
                                        onChange={(e) => setMain(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box6}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標6"
                                        type="text"
                                        onChange={(e) => setSub6(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box7}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標7"
                                        type="text"
                                        onChange={(e) => setSub7(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box8}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標8"
                                        type="text"
                                        onChange={(e) => setSub8(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box9}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder="目標9"
                                        type="text"
                                        onChange={(e) => setSub9(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                            </div>
                            {/* /// */}
                            { showResults ? 
                                <div className={styles.post_container}>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_1"
                                            type="text"
                                            onChange={(e) => setTodo6_1(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_2"
                                            type="text"
                                            onChange={(e) => setTodo6_2(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_3"
                                            type="text"
                                            onChange={(e) => setTodo6_3(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_4"
                                            type="text"
                                            onChange={(e) => setTodo6_4(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={`${styles.post_item} ${styles.box6}`}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            placeholder={sub6}
                                            type="text"
                                            inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                            disabled
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_6"
                                            type="text"
                                            onChange={(e) => setTodo6_6(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_7"
                                            type="text"
                                            onChange={(e) => setTodo6_7(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_8"
                                            type="text"
                                            onChange={(e) => setTodo6_8(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                    <div className={styles.post_item}>
                                        <TextField
                                            multiline
                                            maxRows={2}
                                            // placeholder="6_9"
                                            type="text"
                                            onChange={(e) => setTodo6_9(e.target.value)}
                                            inputProps={{style: {fontSize: '0.5rem'} }} 
                                        />
                                    </div>
                                </div>
                            :
                            null }
                        </div>
                        { showResults ? 
                        <div className={styles.target_box}>
                            <div className={styles.post_container}>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_1"
                                        type="text"
                                        onChange={(e) => setTodo7_1(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_2"
                                        type="text"
                                        onChange={(e) => setTodo7_2(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_3"
                                        type="text"
                                        onChange={(e) => setTodo7_3(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_4"
                                        type="text"
                                        onChange={(e) => setTodo7_4(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box7}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder={sub7}
                                        type="text"
                                        inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                        disabled
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_6"
                                        type="text"
                                        onChange={(e) => setTodo7_6(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_7"
                                        type="text"
                                        onChange={(e) => setTodo7_7(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_8"
                                        type="text"
                                        onChange={(e) => setTodo7_8(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="7_9"
                                        type="text"
                                        onChange={(e) => setTodo7_9(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                            </div>
                            <div className={styles.post_container}>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_1"
                                        type="text"
                                        onChange={(e) => setTodo8_1(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_2"
                                        type="text"
                                        onChange={(e) => setTodo8_2(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_3"
                                        type="text"
                                        onChange={(e) => setTodo8_3(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_4"
                                        type="text"
                                        onChange={(e) => setTodo8_4(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box8}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder={sub8}
                                        type="text"
                                        inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                        disabled
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_6"
                                        type="text"
                                        onChange={(e) => setTodo8_6(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_7"
                                        type="text"
                                        onChange={(e) => setTodo8_7(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_8"
                                        type="text"
                                        onChange={(e) => setTodo8_8(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="8_9"
                                        type="text"
                                        onChange={(e) => setTodo8_9(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                            </div>
                            <div className={styles.post_container}>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_1"
                                        type="text"
                                        onChange={(e) => setTodo9_1(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_2"
                                        type="text"
                                        onChange={(e) => setTodo9_2(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_3"
                                        type="text"
                                        onChange={(e) => setTodo9_3(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_4"
                                        type="text"
                                        onChange={(e) => setTodo9_4(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={`${styles.post_item} ${styles.box9}`}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        placeholder={sub9}
                                        type="text"
                                        inputProps = {{ style: {fontSize: '0.5rem',color:'black'}}}
                                        disabled
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_6"
                                        type="text"
                                        onChange={(e) => setTodo9_6(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_7"
                                        type="text"
                                        onChange={(e) => setTodo9_7(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_8"
                                        type="text"
                                        onChange={(e) => setTodo9_8(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                                <div className={styles.post_item}>
                                    <TextField
                                        multiline
                                        maxRows={2}
                                        // placeholder="9_9"
                                        type="text"
                                        onChange={(e) => setTodo9_9(e.target.value)}
                                        inputProps={{style: {fontSize: '0.5rem'} }} 
                                    />
                                </div>
                            </div>
                        </div>
                        :null }
                    </div>
                <div className={styles.post_container}>
                    <Button
                        disabled={!main}
                        variant="contained"
                        color="inherit"
                        onClick={openDetail}
                    >
                        { showResults ? 
                            "Close Detail" : "Edit Detail"  }
                    </Button>
                    <Button
                        disabled={!main}
                        variant="contained"
                        color="primary"
                        onClick={newTarget}
                    >
                        New post
                    </Button>
                </div>
            </form>
        </Modal>
    </>
  );
};

export default NewTarget;