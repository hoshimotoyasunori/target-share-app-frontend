import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { PROPS_AUTHEN, PROPS_PROFILE, PROPS_NICKNAME } from '../types';
import axios from "axios";

const apiUrl = process.env.REACT_APP_DEV_API_URL;

// ログイン
export const fetchAsyncLogin = createAsyncThunk(
    "auth/post",
    async(authen:PROPS_AUTHEN) => {
        const res = await axios.post(`${apiUrl}authen/jwt/create`,authen,{
            headers:{
                "Content-Type":"application/json",
            },
        });
        return res.data;
    }
);
// 新規登録
export const fetchAsyncRegister = createAsyncThunk(
    "auth/register",
    async(auth:PROPS_AUTHEN) => {
        const res = await axios.post(`${apiUrl}api/register/`,auth,{
            headers:{
                "Content-Type":"application/json",
            },
        });
        return res.data;
    }
);
// プロフィール新規作成
export const fetchAsyncCreateProf = createAsyncThunk(
    "profile/post",
    async(nickName:PROPS_NICKNAME) => {
        const res = await axios.post(`${apiUrl}api/profile/`,nickName,{
            headers:{
                "Content-Type":"application/json",
                Authorization:`JWT ${localStorage.localJWT}`,
            },
        });
        return res.data;
    }
);
// プロフィール変更
export const fetchAsyncUpdateProf = createAsyncThunk(
    "profile/put",
    async (profile: PROPS_PROFILE) => {
        const uploadData = new FormData();
        // uploadData.append("nickName", profile.nickName);
        profile.img && uploadData.append("img", profile.img, profile.img.name);
        console.log(uploadData)
        const res = await axios.put(
            `${apiUrl}api/profile/${profile.id}/`,
            {
                uploadData,
                "userProfile":profile.id,
                "nickName":profile.nickName,
            },
            {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `JWT ${localStorage.localJWT}`,
            },
            }
        );
        return res.data;
    }
);
// プロフィール情報取得（ログインしているユーザー）
export const fetchAsyncGetMyProf = createAsyncThunk(
    "profile/get",
    async () => {
        const res = await axios.get(`${apiUrl}api/myprofile/`, {
            headers: {
                Authorization: `JWT ${localStorage.localJWT}`,
            },
        });
        return res.data[0];
    }
);
// プロフィール情報取得（全部）
export const fetchAsyncGetProfs = createAsyncThunk(
    "profiles/get", 
    async () => {
        const res = await axios.get(`${apiUrl}api/profile/`, {
            headers: {
                Authorization: `JWT ${localStorage.localJWT}`,
            },
        });
        return res.data;
    }
);

// スライスの作成
export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        // authSliceの初期値
        isLoadingAuth:false,
        isLoggedIn:false,
        openSignIn:false,
        openSignUp:false,
        openProfile:false,
        openMypage:true,
        myprofile:{
            id:0,
            nickName:"",
            userProfile:0,
            created_at:"",
            img:"",
        },
        profiles:[
            {
                id:0,
                nickName:"",
                userProfile:0,
                created_at:"",
                img:"",
            },
        ],
    },
    reducers: {
        // APIにfetch
        fetchCredStart(state){
            state.isLoadingAuth=true;
        },
        fetchCredEnd(state){
            state.isLoadingAuth=false;
        },
        // isLoggedInのアクション
        setIsLoggedIn(state){
            state.isLoggedIn=true;
        },
        resetIsLoggedIn(state){
            state.isLoggedIn=false;
        },
        // SiginInのアクション
        setOpenSignIn(state){
            state.openSignIn=true;
        },
        resetOpenSignIn(state){
            state.openSignIn=false;
        },
        // SignUpのアクション
        setOpenSignUp(state){
            state.openSignUp=true;
        },
        resetOpenSignUp(state){
            state.openSignUp=false;
        },
        // プロフィール編集
        setOpenProfile(state){
            state.openProfile=true;
        },
        resetOpenProfile(state){
            state.openProfile=false;
        },
        // mypage
        setOpenMypage(state){
            state.openMypage=true;
        },
        resetOpenMypage(state){
            state.openMypage=false;
        },
        // ニックネーム編集
        editNickName(state,action){
            state.myprofile.nickName = action.payload;
        },
    },

    extraReducers:(builder) =>{
        builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
            localStorage.setItem("localJWT", action.payload.access);
            state.isLoggedIn=true;
        });
        builder.addCase(fetchAsyncCreateProf.fulfilled, (state, action) => {
            state.myprofile = action.payload;
        });
        builder.addCase(fetchAsyncUpdateProf.fulfilled, (state, action) => {
            state.myprofile = action.payload;
            // SPA実現するために更新したデータを即反映させるためのもの
            state.profiles = state.profiles.map((prof) =>
                prof.id === action.payload.id ? action.payload : prof
            );
        });
        builder.addCase(fetchAsyncGetMyProf.fulfilled, (state, action) => {
            state.myprofile = action.payload;
        });
        builder.addCase(fetchAsyncGetProfs.fulfilled, (state, action) => {
            state.profiles = action.payload;
        });
    },
});

// Reactで使用するためexport
export const {
    fetchCredStart,
    fetchCredEnd,

    setIsLoggedIn,
    resetIsLoggedIn,

    setOpenSignIn,
    resetOpenSignIn,

    setOpenSignUp,
    resetOpenSignUp,

    setOpenProfile,
    resetOpenProfile,

    setOpenMypage,
    resetOpenMypage,

    editNickName,

} = authSlice.actions;

export const selectIsLoadingAuth = (state: RootState) => state.auth.isLoadingAuth;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectOpenSignIn = (state: RootState) => state.auth.openSignIn;
export const selectOpenSignUp = (state: RootState) => state.auth.openSignUp;
// プロフィール編集モーダル表示のコントロール
export const selectOpenProfile = (state: RootState) => state.auth.openProfile;
// mypage表示をコントロール
export const selectOpenMypage = (state: RootState) => state.auth.openMypage;
// ログインしているユーザー情報の取得
export const selectProfile = (state: RootState) => state.auth.myprofile;
// target一覧時の投稿者表示のため
export const selectProfiles = (state: RootState) => state.auth.profiles;

export default authSlice.reducer;