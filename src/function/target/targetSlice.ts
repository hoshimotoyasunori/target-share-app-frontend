import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { PROPS_NEWTARGET, PROPS_TARGET, PROPS_LIKED, PROPS_COMMENT } from "../types";

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
    "mytarget/put",
    async (target: PROPS_TARGET) => {
        const res = await axios.put(
            `${apiUrlTarget}/${target.targetId}/`,
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
    mytarget: [
      {
        id: 0,
        main: "",
        userTarget: 0,
        created_at: "",
        liked: [0],
        sub1:"",
        sub2:"",
        sub3:"",
        sub4:"",
        sub6:"",
        sub7:"",
        sub8:"",
        sub9:"",
        todo1_1:"",
        todo1_2:"",
        todo1_3:"",
        todo1_4:"",
        todo1_6:"",
        todo1_7:"",
        todo1_8:"",
        todo1_9:"",
        todo2_1:"",
        todo2_2:"",
        todo2_3:"",
        todo2_4:"",
        todo2_6:"",
        todo2_7:"",
        todo2_8:"",
        todo2_9:"",
        todo3_1:"",
        todo3_2:"",
        todo3_3:"",
        todo3_4:"",
        todo3_6:"",
        todo3_7:"",
        todo3_8:"",
        todo3_9:"",
        todo4_1:"",
        todo4_2:"",
        todo4_3:"",
        todo4_4:"",
        todo4_6:"",
        todo4_7:"",
        todo4_8:"",
        todo4_9:"",
        todo6_1:"",
        todo6_2:"",
        todo6_3:"",
        todo6_4:"",
        todo6_6:"",
        todo6_7:"",
        todo6_8:"",
        todo6_9:"",
        todo7_1:"",
        todo7_2:"",
        todo7_3:"",
        todo7_4:"",
        todo7_6:"",
        todo7_7:"",
        todo7_8:"",
        todo7_9:"",
        todo8_1:"",
        todo8_2:"",
        todo8_3:"",
        todo8_4:"",
        todo8_6:"",
        todo8_7:"",
        todo8_8:"",
        todo8_9:"",
        todo9_1:"",
        todo9_2:"",
        todo9_3:"",
        todo9_4:"",
        todo9_6:"",
        todo9_7:"",
        todo9_8:"",
        todo9_9:"",
      },
    ],
    targets: [
      {
        id: 0,
        main: "",
        userTarget: 0,
        created_at: "",
        liked: [0],
        sub1:"",
        sub2:"",
        sub3:"",
        sub4:"",
        sub6:"",
        sub7:"",
        sub8:"",
        sub9:"",
        todo1_1:"",
        todo1_2:"",
        todo1_3:"",
        todo1_4:"",
        todo1_6:"",
        todo1_7:"",
        todo1_8:"",
        todo1_9:"",
        todo2_1:"",
        todo2_2:"",
        todo2_3:"",
        todo2_4:"",
        todo2_6:"",
        todo2_7:"",
        todo2_8:"",
        todo2_9:"",
        todo3_1:"",
        todo3_2:"",
        todo3_3:"",
        todo3_4:"",
        todo3_6:"",
        todo3_7:"",
        todo3_8:"",
        todo3_9:"",
        todo4_1:"",
        todo4_2:"",
        todo4_3:"",
        todo4_4:"",
        todo4_6:"",
        todo4_7:"",
        todo4_8:"",
        todo4_9:"",
        todo6_1:"",
        todo6_2:"",
        todo6_3:"",
        todo6_4:"",
        todo6_6:"",
        todo6_7:"",
        todo6_8:"",
        todo6_9:"",
        todo7_1:"",
        todo7_2:"",
        todo7_3:"",
        todo7_4:"",
        todo7_6:"",
        todo7_7:"",
        todo7_8:"",
        todo7_9:"",
        todo8_1:"",
        todo8_2:"",
        todo8_3:"",
        todo8_4:"",
        todo8_6:"",
        todo8_7:"",
        todo8_8:"",
        todo8_9:"",
        todo9_1:"",
        todo9_2:"",
        todo9_3:"",
        todo9_4:"",
        todo9_6:"",
        todo9_7:"",
        todo9_8:"",
        todo9_9:"",
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
    //  // ニックネーム編集
    //  editTarget(state,action){
    //   state.mytarget.main = action.payload;
    // },
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
      state.mytarget = action.payload;
      // SPA実現するために更新したデータを即反映させるためのもの
      state.targets = state.targets.map((tar) =>
          tar.id === action.payload.id ? action.payload : tar
      );
   });
  },
});

export const {
  fetchTargetStart,
  fetchTargetEnd,
  setOpenNewTarget,
  resetOpenNewTarget,
  setOpenEditMyTarget,
  resetOpenEditMyTarget,
} = targetSlice.actions;

export const selectIsLoadingTarget = (state: RootState) => state.target.isLoadingTarget;
export const selectOpenNewTarget = (state: RootState) => state.target.openNewTarget;
export const selectOpenEditMyTarget = (state: RootState) => state.target.openEditMyTarget;
export const selectMyTarget = (state: RootState) => state.target.mytarget;
export const selectTargets = (state: RootState) => state.target.targets;
export const selectComments = (state: RootState) => state.target.comments;

export default targetSlice.reducer;
