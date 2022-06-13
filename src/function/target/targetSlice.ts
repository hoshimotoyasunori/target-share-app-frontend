import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { PROPS_NEWTARGET, PROPS_EDITTARGET, PROPS_LIKED, PROPS_COMMENT } from "../types";

const apiUrlTarget = `${process.env.REACT_APP_DEV_API_URL}api/target/`;
const apiUrlMyTarget = `${process.env.REACT_APP_DEV_API_URL}api/mytarget/`;
const apiUrlComment = `${process.env.REACT_APP_DEV_API_URL}api/comment/`;

export const fetchAsyncGetTargets = createAsyncThunk(
  "targets/get",
  async () => {
    const res = await axios.get(apiUrlTarget, {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    // console.log(res)
  return res.data;
});
export const fetchAsyncGetMyTarget = createAsyncThunk(
  "mytarget/get",
  async () => {
    const res = await axios.get(apiUrlMyTarget, {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    // console.log(res)
  return res.data;
});

export const fetchAsyncNewTarget = createAsyncThunk(
  "target/post",
  async (newTarget: PROPS_NEWTARGET) => {
    const res = await axios.post(apiUrlTarget, newTarget, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data;
  }
);
export const fetchAsyncUpdateMyTarget = createAsyncThunk(
    "target/put",
    async (target: PROPS_EDITTARGET) => {
        const res = await axios.put(
            `${apiUrlTarget}${target.id}/`,
            target,
            {
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `JWT ${localStorage.localJWT}`,
              },
            }
        );
        return res.data;
    }
);
export const fetchAsyncDeleteMyTarget = createAsyncThunk(
    "target/delete",
    async (target: PROPS_EDITTARGET) => {
        const res = await axios.delete(
            `${apiUrlTarget}${target.id}`,
            {
              headers: {
                  Authorization: `JWT ${localStorage.localJWT}`,
              },
            }
        );
        return res.data;
    }
);

export const fetchAsyncPatchLiked = createAsyncThunk(
  "target/patch",
  async (liked: PROPS_LIKED) => {
    const currentLiked = liked.current;
    const uploadData = new FormData();

    let isOverlapped = false;
    // すでに配列内userIdが格納されているかの分岐
    currentLiked.forEach((current) => {
      if (current === liked.new) {
        isOverlapped = true;
      } else {
        uploadData.append("liked", String(current));
      }
    });

    if (!isOverlapped) {
      uploadData.append("liked", String(liked.new));
    } else if (currentLiked.length === 1) {
      uploadData.append("main", liked.main);
      const res = await axios.put(`${apiUrlTarget}${liked.id}/`, uploadData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      });
      return res.data;
    }

    const res = await axios.patch(`${apiUrlTarget}${liked.id}/`, uploadData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data;
  }
);
export const fetchAsyncGetComments = createAsyncThunk(
  "comment/get",
  async () => {
    const res = await axios.get(apiUrlComment, {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data;
  }
);
export const fetchAsyncUserComment = createAsyncThunk(
  "comment/post",
  async (comment: PROPS_COMMENT) => {
    const res = await axios.post(apiUrlComment, comment, {
      headers: {
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    return res.data;
  }
);

export const targetSlice = createSlice({
  name: "target",
  initialState: {
    isLoadingTarget: false,
    openNewTarget: false,
    openEditMyTarget:false,
    edit_mytarget:{
      id: 0,
      main: "",
      sub1:"",sub2:"",sub3:"",sub4:"",sub6:"",sub7:"",sub8:"",sub9:"",
      todo1_1:"",todo1_2:"",todo1_3:"",todo1_4:"",todo1_6:"",todo1_7:"",todo1_8:"",todo1_9:"",
      todo2_1:"",todo2_2:"",todo2_3:"",todo2_4:"",todo2_6:"",todo2_7:"",todo2_8:"",todo2_9:"",
      todo3_1:"",todo3_2:"",todo3_3:"",todo3_4:"",todo3_6:"",todo3_7:"",todo3_8:"",todo3_9:"",
      todo4_1:"",todo4_2:"",todo4_3:"",todo4_4:"",todo4_6:"",todo4_7:"",todo4_8:"",todo4_9:"",
      todo6_1:"",todo6_2:"",todo6_3:"",todo6_4:"",todo6_6:"",todo6_7:"",todo6_8:"",todo6_9:"",
      todo7_1:"",todo7_2:"",todo7_3:"",todo7_4:"",todo7_6:"",todo7_7:"",todo7_8:"",todo7_9:"",
      todo8_1:"",todo8_2:"",todo8_3:"",todo8_4:"",todo8_6:"",todo8_7:"",todo8_8:"",todo8_9:"",
      todo9_1:"",todo9_2:"",todo9_3:"",todo9_4:"",todo9_6:"",todo9_7:"",todo9_8:"",todo9_9:"",
    },
    mytarget: [
      {
        id: 0,
        main: "",
        userTarget: 0,
        created_at: "",
        liked: [0],
        sub1:"",sub2:"",sub3:"",sub4:"",sub6:"",sub7:"",sub8:"",sub9:"",
        todo1_1:"",todo1_2:"",todo1_3:"",todo1_4:"",todo1_6:"",todo1_7:"",todo1_8:"",todo1_9:"",
        todo2_1:"",todo2_2:"",todo2_3:"",todo2_4:"",todo2_6:"",todo2_7:"",todo2_8:"",todo2_9:"",
        todo3_1:"",todo3_2:"",todo3_3:"",todo3_4:"",todo3_6:"",todo3_7:"",todo3_8:"",todo3_9:"",
        todo4_1:"",todo4_2:"",todo4_3:"",todo4_4:"",todo4_6:"",todo4_7:"",todo4_8:"",todo4_9:"",
        todo6_1:"",todo6_2:"",todo6_3:"",todo6_4:"",todo6_6:"",todo6_7:"",todo6_8:"",todo6_9:"",
        todo7_1:"",todo7_2:"",todo7_3:"",todo7_4:"",todo7_6:"",todo7_7:"",todo7_8:"",todo7_9:"",
        todo8_1:"",todo8_2:"",todo8_3:"",todo8_4:"",todo8_6:"",todo8_7:"",todo8_8:"",todo8_9:"",
        todo9_1:"",todo9_2:"",todo9_3:"",todo9_4:"",todo9_6:"",todo9_7:"",todo9_8:"",todo9_9:"",
      },
    ],
    targets: [
      {
        id: 0,
        main: "",
        userTarget: 0,
        created_at: "",
        liked: [0],
        sub1:"",sub2:"",sub3:"",sub4:"",sub6:"",sub7:"",sub8:"",sub9:"",
        todo1_1:"",todo1_2:"",todo1_3:"",todo1_4:"",todo1_6:"",todo1_7:"",todo1_8:"",todo1_9:"",
        todo2_1:"",todo2_2:"",todo2_3:"",todo2_4:"",todo2_6:"",todo2_7:"",todo2_8:"",todo2_9:"",
        todo3_1:"",todo3_2:"",todo3_3:"",todo3_4:"",todo3_6:"",todo3_7:"",todo3_8:"",todo3_9:"",
        todo4_1:"",todo4_2:"",todo4_3:"",todo4_4:"",todo4_6:"",todo4_7:"",todo4_8:"",todo4_9:"",
        todo6_1:"",todo6_2:"",todo6_3:"",todo6_4:"",todo6_6:"",todo6_7:"",todo6_8:"",todo6_9:"",
        todo7_1:"",todo7_2:"",todo7_3:"",todo7_4:"",todo7_6:"",todo7_7:"",todo7_8:"",todo7_9:"",
        todo8_1:"",todo8_2:"",todo8_3:"",todo8_4:"",todo8_6:"",todo8_7:"",todo8_8:"",todo8_9:"",
        todo9_1:"",todo9_2:"",todo9_3:"",todo9_4:"",todo9_6:"",todo9_7:"",todo9_8:"",todo9_9:"",
      },
    ],
    comments: [
      {
        id: 0,
        text: "",
        userComment: 0,
        target:0,
      },
    ],
  },
  reducers: {
    // APIにフェッチ
    fetchTargetStart(state) {
      state.isLoadingTarget = true;
    },
    fetchTargetEnd(state) {
      state.isLoadingTarget = false;
    },
    // NewTargetのアクション
    setOpenNewTarget(state) {
      state.openNewTarget = true;
    },
    resetOpenNewTarget(state) {
      state.openNewTarget = false;
    },
    // Target編集のアクション
    setOpenEditMyTarget(state){
      state.openEditMyTarget=true;
    },
    resetOpenEditMyTarget(state){
      state.openEditMyTarget=false;
    },
    selectEditMyTarget(state,action){
      state.edit_mytarget = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetTargets.fulfilled, (state, action) => {
      return {
        ...state,
        targets: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetMyTarget.fulfilled, (state, action) => {
        return{
          ...state,
          mytarget : action.payload,
        };
    });
    builder.addCase(fetchAsyncNewTarget.fulfilled, (state, action) => {
      return {
        ...state,
        targets: [...state.targets, action.payload],
        mytarget:[...state.mytarget,action.payload],
      };
    });
    builder.addCase(fetchAsyncGetComments.fulfilled, (state, action) => {
      return {
        ...state,
        comments: action.payload,
      };
    });
    builder.addCase(fetchAsyncUserComment.fulfilled, (state, action) => {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    });
    builder.addCase(fetchAsyncPatchLiked.fulfilled, (state, action) => {
      return {
        ...state,
        targets: state.targets.map((target) =>
          target.id === action.payload.id ? action.payload : target
        ),
      };
    });
    builder.addCase(fetchAsyncUpdateMyTarget.fulfilled, (state, action) => {
      state.edit_mytarget = action.payload;
      state.mytarget = state.mytarget.map((tar) =>
        tar.id === action.payload.id ? action.payload : tar
      );
      state.targets = state.targets.map((tar) =>
        tar.id === action.payload.id ? action.payload : tar
      );
    });
    // builder.addCase(fetchAsyncDeleteMyTarget.fulfilled, (state,action) => {
    //   return {
    //     ...state,
    //     targets: state.targets.map((target) =>
    //       target.id === action.payload.id ? action.payload : target
    //     ),
    //   };
    // })
  },
});

export const {
  fetchTargetStart,
  fetchTargetEnd,
  setOpenNewTarget,
  resetOpenNewTarget,
  setOpenEditMyTarget,
  resetOpenEditMyTarget,
  selectEditMyTarget,
  // editMain,
  // editSub1,editSub2,editSub3,editSub4,editSub6,editSub7,editSub8,editSub9,
  // editTodo1_1,editTodo1_2,editTodo1_3,editTodo1_4,editTodo1_6,editTodo1_7,editTodo1_8,editTodo1_9,
  // editTodo2_1,editTodo2_2,editTodo2_3,editTodo2_4,editTodo2_6,editTodo2_7,editTodo2_8,editTodo2_9,
  // editTodo3_1,editTodo3_2,editTodo3_3,editTodo3_4,editTodo3_6,editTodo3_7,editTodo3_8,editTodo3_9,
  // editTodo4_1,editTodo4_2,editTodo4_3,editTodo4_4,editTodo4_6,editTodo4_7,editTodo4_8,editTodo4_9,
  // editTodo6_1,editTodo6_2,editTodo6_3,editTodo6_4,editTodo6_6,editTodo6_7,editTodo6_8,editTodo6_9,
  // editTodo7_1,editTodo7_2,editTodo7_3,editTodo7_4,editTodo7_6,editTodo7_7,editTodo7_8,editTodo7_9,
  // editTodo8_1,editTodo8_2,editTodo8_3,editTodo8_4,editTodo8_6,editTodo8_7,editTodo8_8,editTodo8_9,
  // editTodo9_1,editTodo9_2,editTodo9_3,editTodo9_4,editTodo9_6,editTodo9_7,editTodo9_8,editTodo9_9,
} = targetSlice.actions;

export const selectIsLoadingTarget = (state: RootState) => state.target.isLoadingTarget;
export const selectOpenNewTarget = (state: RootState) => state.target.openNewTarget;
export const selectOpenEditMyTarget = (state: RootState) => state.target.openEditMyTarget;
export const selectMyTarget = (state: RootState) => state.target.mytarget;
export const selectTargets = (state: RootState) => state.target.targets;
export const selectComments = (state: RootState) => state.target.comments;
export const selectEditTarget = (state: RootState) => state.target.edit_mytarget;


export default targetSlice.reducer;
