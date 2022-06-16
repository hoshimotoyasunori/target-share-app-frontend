import React from 'react'
import Modal from 'react-modal';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';

import { TextField, Button, CircularProgress } from "@material-ui/core";

import {
  selectIsLoadingAuth,
  //非同期
  fetchCredStart,
  fetchCredEnd,
} from "../function/auth/authSlice";

import {
  selectOpenEditMyTarget,
  resetOpenEditMyTarget,
  fetchAsyncUpdateMyTarget,
  selectEditTarget,
  editMain,
  editSub1,editSub2,editSub3,editSub4,editSub6,editSub7,editSub8,editSub9,
  editTodo1_1,editTodo1_2,editTodo1_3,editTodo1_4,editTodo1_6,editTodo1_7,editTodo1_8,editTodo1_9,
  editTodo2_1,editTodo2_2,editTodo2_3,editTodo2_4,editTodo2_6,editTodo2_7,editTodo2_8,editTodo2_9,
  editTodo3_1,editTodo3_2,editTodo3_3,editTodo3_4,editTodo3_6,editTodo3_7,editTodo3_8,editTodo3_9,
  editTodo4_1,editTodo4_2,editTodo4_3,editTodo4_4,editTodo4_6,editTodo4_7,editTodo4_8,editTodo4_9,
  editTodo6_1,editTodo6_2,editTodo6_3,editTodo6_4,editTodo6_6,editTodo6_7,editTodo6_8,editTodo6_9,
  editTodo7_1,editTodo7_2,editTodo7_3,editTodo7_4,editTodo7_6,editTodo7_7,editTodo7_8,editTodo7_9,
  editTodo8_1,editTodo8_2,editTodo8_3,editTodo8_4,editTodo8_6,editTodo8_7,editTodo8_8,editTodo8_9,
  editTodo9_1,editTodo9_2,editTodo9_3,editTodo9_4,editTodo9_6,editTodo9_7,editTodo9_8,editTodo9_9,

} from '../function/target/targetSlice';

import styles from "../function/core/Core.module.css";


const customStyles = {
  content: {
    top: "57%",
    left: "50%",

    width: "85%",
    height: "80%",
    padding: "10px",

    transform: "translate(-50%, -50%)",
    },
};

const EditMyTarget : React.FC = () => {
  const dispatch : AppDispatch = useDispatch();
  const openEditMyTarget = useSelector(selectOpenEditMyTarget);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const editTarget = useSelector(selectEditTarget);
  // const [main, setMain] = useState(editTarget.main);
  // const [sub1, setSub1] = useState(editTarget.sub1);const [sub2, setSub2] = useState(editTarget.sub2);const [sub3, setSub3] = useState(editTarget.sub3);const [sub4, setSub4] = useState(editTarget.sub4);const [sub6, setSub6] = useState(editTarget.sub6);const [sub7, setSub7] = useState(editTarget.sub7);const [sub8, setSub8] = useState(editTarget.sub8);const [sub9, setSub9] = useState(editTarget.sub9);
  // const [todo1_1, setTodo1_1] = useState(editTarget.todo1_1);const [todo1_2, setTodo1_2] = useState(editTarget.todo1_2);const [todo1_3, setTodo1_3] = useState(editTarget.todo1_3);const [todo1_4, setTodo1_4] = useState(editTarget.todo1_4);const [todo1_6, setTodo1_6] = useState(editTarget.todo1_6);const [todo1_7, setTodo1_7] = useState(editTarget.todo1_7);const [todo1_8, setTodo1_8] = useState(editTarget.todo1_8);const [todo1_9, setTodo1_9] = useState(editTarget.todo1_9);
  // const [todo2_1, setTodo2_1] = useState(editTarget.todo2_1);const [todo2_2, setTodo2_2] = useState(editTarget.todo2_2);const [todo2_3, setTodo2_3] = useState(editTarget.todo2_3);const [todo2_4, setTodo2_4] = useState(editTarget.todo2_4);const [todo2_6, setTodo2_6] = useState(editTarget.todo2_6);const [todo2_7, setTodo2_7] = useState(editTarget.todo2_7);const [todo2_8, setTodo2_8] = useState(editTarget.todo2_8);const [todo2_9, setTodo2_9] = useState(editTarget.todo2_9);
  // const [todo3_1, setTodo3_1] = useState(editTarget.todo3_1);const [todo3_2, setTodo3_2] = useState(editTarget.todo3_2);const [todo3_3, setTodo3_3] = useState(editTarget.todo3_3);const [todo3_4, setTodo3_4] = useState(editTarget.todo3_4);const [todo3_6, setTodo3_6] = useState(editTarget.todo3_6);const [todo3_7, setTodo3_7] = useState(editTarget.todo3_7);const [todo3_8, setTodo3_8] = useState(editTarget.todo3_8);const [todo3_9, setTodo3_9] = useState(editTarget.todo3_9);
  // const [todo4_1, setTodo4_1] = useState(editTarget.todo4_1);const [todo4_2, setTodo4_2] = useState(editTarget.todo4_2);const [todo4_3, setTodo4_3] = useState(editTarget.todo4_3);const [todo4_4, setTodo4_4] = useState(editTarget.todo4_4);const [todo4_6, setTodo4_6] = useState(editTarget.todo4_6);const [todo4_7, setTodo4_7] = useState(editTarget.todo4_7);const [todo4_8, setTodo4_8] = useState(editTarget.todo4_8);const [todo4_9, setTodo4_9] = useState(editTarget.todo4_9);
  // const [todo6_1, setTodo6_1] = useState(editTarget.todo6_1);const [todo6_2, setTodo6_2] = useState(editTarget.todo6_2);const [todo6_3, setTodo6_3] = useState(editTarget.todo6_3);const [todo6_4, setTodo6_4] = useState(editTarget.todo6_4);const [todo6_6, setTodo6_6] = useState(editTarget.todo6_6);const [todo6_7, setTodo6_7] = useState(editTarget.todo6_7);const [todo6_8, setTodo6_8] = useState(editTarget.todo6_8);const [todo6_9, setTodo6_9] = useState(editTarget.todo6_9);
  // const [todo7_1, setTodo7_1] = useState(editTarget.todo7_1);const [todo7_2, setTodo7_2] = useState(editTarget.todo7_2);const [todo7_3, setTodo7_3] = useState(editTarget.todo7_3);const [todo7_4, setTodo7_4] = useState(editTarget.todo7_4);const [todo7_6, setTodo7_6] = useState(editTarget.todo7_6);const [todo7_7, setTodo7_7] = useState(editTarget.todo7_7);const [todo7_8, setTodo7_8] = useState(editTarget.todo7_8);const [todo7_9, setTodo7_9] = useState(editTarget.todo7_9);
  // const [todo8_1, setTodo8_1] = useState(editTarget.todo8_1);const [todo8_2, setTodo8_2] = useState(editTarget.todo8_2);const [todo8_3, setTodo8_3] = useState(editTarget.todo8_3);const [todo8_4, setTodo8_4] = useState(editTarget.todo8_4);const [todo8_6, setTodo8_6] = useState(editTarget.todo8_6);const [todo8_7, setTodo8_7] = useState(editTarget.todo8_7);const [todo8_8, setTodo8_8] = useState(editTarget.todo8_8);const [todo8_9, setTodo8_9] = useState(editTarget.todo8_9);
  // const [todo9_1, setTodo9_1] = useState(editTarget.todo9_1);const [todo9_2, setTodo9_2] = useState(editTarget.todo9_2);const [todo9_3, setTodo9_3] = useState(editTarget.todo9_3);const [todo9_4, setTodo9_4] = useState(editTarget.todo9_4);const [todo9_6, setTodo9_6] = useState(editTarget.todo9_6);const [todo9_7, setTodo9_7] = useState(editTarget.todo9_7);const [todo9_8, setTodo9_8] = useState(editTarget.todo9_8);const [todo9_9, setTodo9_9] = useState(editTarget.todo9_9);
  // console.log("main")
  // console.log(main)
  // console.log("setMain")
  // console.log(setMain())
  const updateMyTarget = async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const packet = {
      id:editTarget.id,
      main:editTarget.main,
      sub1:editTarget.sub1,sub2:editTarget.sub2,sub3:editTarget.sub3,sub4:editTarget.sub4,sub6:editTarget.sub6,sub7:editTarget.sub7,sub8:editTarget.sub8,sub9:editTarget.sub9,
      todo1_1:editTarget.todo1_1,todo1_2:editTarget.todo1_2,todo1_3:editTarget.todo1_3,todo1_4:editTarget.todo1_4,todo1_6:editTarget.todo1_6,todo1_7:editTarget.todo1_7,todo1_8:editTarget.todo1_8,todo1_9:editTarget.todo1_9,
      todo2_1:editTarget.todo2_1,todo2_2:editTarget.todo2_2,todo2_3:editTarget.todo2_3,todo2_4:editTarget.todo2_4,todo2_6:editTarget.todo2_6,todo2_7:editTarget.todo2_7,todo2_8:editTarget.todo2_8,todo2_9:editTarget.todo2_9,
      todo3_1:editTarget.todo3_1,todo3_2:editTarget.todo3_2,todo3_3:editTarget.todo3_3,todo3_4:editTarget.todo3_4,todo3_6:editTarget.todo3_6,todo3_7:editTarget.todo3_7,todo3_8:editTarget.todo3_8,todo3_9:editTarget.todo3_9,
      todo4_1:editTarget.todo4_1,todo4_2:editTarget.todo4_2,todo4_3:editTarget.todo4_3,todo4_4:editTarget.todo4_4,todo4_6:editTarget.todo4_6,todo4_7:editTarget.todo4_7,todo4_8:editTarget.todo4_8,todo4_9:editTarget.todo4_9,
      todo6_1:editTarget.todo6_1,todo6_2:editTarget.todo6_2,todo6_3:editTarget.todo6_3,todo6_4:editTarget.todo6_4,todo6_6:editTarget.todo6_6,todo6_7:editTarget.todo6_7,todo6_8:editTarget.todo6_8,todo6_9:editTarget.todo6_9,
      todo7_1:editTarget.todo7_1,todo7_2:editTarget.todo7_2,todo7_3:editTarget.todo7_3,todo7_4:editTarget.todo7_4,todo7_6:editTarget.todo7_6,todo7_7:editTarget.todo7_7,todo7_8:editTarget.todo7_8,todo7_9:editTarget.todo7_9,
      todo8_1:editTarget.todo8_1,todo8_2:editTarget.todo8_2,todo8_3:editTarget.todo8_3,todo8_4:editTarget.todo8_4,todo8_6:editTarget.todo8_6,todo8_7:editTarget.todo8_7,todo8_8:editTarget.todo8_8,todo8_9:editTarget.todo8_9,
      todo9_1:editTarget.todo9_1,todo9_2:editTarget.todo9_2,todo9_3:editTarget.todo9_3,todo9_4:editTarget.todo9_4,todo9_6:editTarget.todo9_6,todo9_7:editTarget.todo9_7,todo9_8:editTarget.todo9_8,todo9_9:editTarget.todo9_9,
    };
    console.log(packet)
    await dispatch(fetchCredStart());
    await dispatch(fetchAsyncUpdateMyTarget(packet));
    await dispatch(fetchCredEnd());
    // setMain("");
    // setSub1("");setSub2("");setSub3("");setSub4("");setSub6("");setSub7("");setSub8("");setSub9("");
    // setTodo1_1("");setTodo1_2("");setTodo1_3("");setTodo1_4("");setTodo1_6("");setTodo1_7("");setTodo1_8("");setTodo1_9("");
    // setTodo2_1("");setTodo2_2("");setTodo2_3("");setTodo2_4("");setTodo2_6("");setTodo2_7("");setTodo2_8("");setTodo2_9("");
    // setTodo3_1("");setTodo3_2("");setTodo3_3("");setTodo3_4("");setTodo3_6("");setTodo3_7("");setTodo3_8("");setTodo3_9("");
    // setTodo4_1("");setTodo4_2("");setTodo4_3("");setTodo4_4("");setTodo4_6("");setTodo4_7("");setTodo4_8("");setTodo4_9("");
    // setTodo6_1("");setTodo6_2("");setTodo6_3("");setTodo6_4("");setTodo6_6("");setTodo6_7("");setTodo6_8("");setTodo6_9("");
    // setTodo7_1("");setTodo7_2("");setTodo7_3("");setTodo7_4("");setTodo7_6("");setTodo7_7("");setTodo7_8("");setTodo7_9("");
    // setTodo8_1("");setTodo8_2("");setTodo8_3("");setTodo8_4("");setTodo8_6("");setTodo8_7("");setTodo8_8("");setTodo8_9("");
    // setTodo9_1("");setTodo9_2("");setTodo9_3("");setTodo9_4("");setTodo9_6("");setTodo9_7("");setTodo9_8("");setTodo9_9("");
    await dispatch(resetOpenEditMyTarget());
  }


  return (
    <>
      <Modal 
        isOpen={openEditMyTarget}
        // onRequestClose={async () => {
        //   await dispatch(resetOpenEditMyTarget());
        // }}
        style={customStyles} 
      >
        <br/>
        <h4>※現在、過去記入データを反映できないようになっております。編集するには再度記入いただく必要があります。</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(resetOpenEditMyTarget());
          }}
        >
          閉じる
        </Button>
        <form className={styles.core_container}>
          <div className={styles.auth_progress}>
          </div>
          <h1 className={styles.core_title}>Targetの編集</h1>
          {isLoadingAuth && <CircularProgress />}
          <br />
          <div className={styles.target_container}>
            <div className={styles.target_box}>
{/*                       box1                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget.todo1_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo1_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo1_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo1_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo1_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo1_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    // defaultValue={editTarget.todo1_4}
                    onChange={(e) => dispatch( editTodo1_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box1}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    // value={sub1}
                    placeholder={editTarget?.sub1}
                    type="text"
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    disabled
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo1_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo1_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo1_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo1_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo1_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo1_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo1_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo1_9(e.target.value))}
                  />
                </div>
              </div>
{/*                       box2                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box2}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    placeholder={editTarget?.sub2}
                    // value={sub2}
                    type="text"
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    disabled
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo2_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo2_9(e.target.value))}
                  />
                </div>
              </div>
{/*                       box3                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box3}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    placeholder={editTarget?.sub3}
                    // value={sub3}
                    type="text"
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    disabled
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo3_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo3_9(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className={styles.target_box}>
{/*                       box4                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box4}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    // value={sub1}
                    placeholder={editTarget?.sub4}
                    type="text"
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    disabled
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo4_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo4_9(e.target.value))}
                  />
                </div>
              </div>
{/*                       box5                             */}
              <div className={styles.post_container }>
                <div className={`${styles.post_item} ${styles.box1}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // value={sub1}
                    placeholder={editTarget?.sub1}
                    // defaultValue={editTarget.sub1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub1(e.target.value))}
                />
                </div>
                <div className={`${styles.post_item} ${styles.box2}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.sub2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub2(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box3}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.sub3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub3(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box4}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.sub4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box5}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.main}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editMain(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box6}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.sub6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub6(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box7}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.sub7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub7(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box8}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.sub8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub8(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box9}`}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    defaultValue={editTarget.sub9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editSub9(e.target.value))}
                  />
                </div>
              </div>
{/*                       box6                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box6}`}>
                  <TextField
                    disabled
                    multiline
                    maxRows={2}
                    type="text"
                    placeholder={editTarget?.sub6}
                    // value={sub6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    // onChange={(e) => dispatch( editSub6(e.target.value)}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo6_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo6_9(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className={styles.target_box}>
{/*                       box7                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box7}`}>
                  <TextField
                    disabled
                    multiline
                    maxRows={2}
                    type="text"
                    placeholder={editTarget?.sub7}
                    // value={sub7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    // onChange={(e) => dispatch( editSub1(e.target.value)}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo7_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo7_9(e.target.value))}
                  />
                </div>
              </div>
{/*                       box8                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box8}`}>
                  <TextField
                    disabled
                    multiline
                    maxRows={2}
                    type="text"
                    placeholder={editTarget?.sub8}
                    // value={sub8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo8_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo8_9(e.target.value))}
                  />
                </div>
              </div>
{/*                       box9                             */}
              <div className={styles.post_container }>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_1}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_1(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_2}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_2(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_3}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_3(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_4}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_4(e.target.value))}
                  />
                </div>
                <div className={`${styles.post_item} ${styles.box9}`}>
                  <TextField
                    disabled
                    multiline
                    maxRows={2}
                    type="text"
                    placeholder={editTarget?.sub9}
                    // value={sub9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_6}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_6(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_7}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_7(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_8}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_8(e.target.value))}
                  />
                </div>
                <div className={styles.post_item}>
                  <TextField
                    multiline
                    maxRows={2}
                    type="text"
                    // defaultValue={editTarget?.todo9_9}
                    inputProps={{style: {fontSize: '0.5rem'} }}
                    onChange={(e) => dispatch( editTodo9_9(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            disabled={!editTarget.main}
            variant="contained"
            color="primary"
            type="submit"
            onClick={updateMyTarget}
          >
            更新
          </Button>
        </form>
      </Modal>
    </>
  )
}

export default EditMyTarget
